import React, { useEffect, useState } from 'react';

export default function MyOrders() {
    const [orderData, setOrderData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMyOrder = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail'),
                }),
            });

            const data = await response.json();

            // Log the entire data object to understand its structure
            console.log("Fetched Data:", data);

            // Check if data has the expected structure
            if (data && data.orderData && Array.isArray(data.orderData.order_data)) {
                setOrderData(data.orderData.order_data);
            } else {
                console.error("Invalid data structure:", data);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='container'>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {orderData.map((order, orderIndex) => (
                        <div key={orderIndex} style={{ background: '#FFFFE0', padding: '10px', borderRadius: '8px' }}>
                            {order.map((arrayData, arrayIndex) => (
                                <div key={arrayIndex} className='col-12 col-md-6 col-lg-4'>
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title">{arrayData.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{arrayData.qty}</span>
                                                <span className='m-1'>{arrayData.size}</span>
                                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                    ₹{arrayData.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}