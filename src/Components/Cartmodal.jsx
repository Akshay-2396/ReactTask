import React from 'react';

const CartModal = ({ Open, onClose, cart, removeFromCart }) => {
  if (!Open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md max-h-[90vh] overflow-y-auto scrollbar-hide">
        
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"  alt="No items in cart."/>
          
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
              <img src={item.image} alt={item.title} className="w-30 h-30 object-contain" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-green-700 font-bold">${item.price}</p>
                
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline text-lg"
              >
                Remove
              </button>
              
            </div>
          ))
        )}
        <button onClick={onClose} className=" text-lg border-2 w-20 bg-blue-600 text-white hover:scale-90 transition ">Close</button>
      </div>
    </div>
  );
};

export default CartModal;