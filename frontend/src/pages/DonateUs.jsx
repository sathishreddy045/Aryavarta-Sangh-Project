import React, { useState, useEffect } from 'react';
import peopleImg from '../assets/peoples.jpg';

const DonateUs = () => {
    const [amount, setAmount] = useState(501);
    const [customAmount, setCustomAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [upiId, setUpiId] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleAmountClick = (value) => {
        setAmount(value);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        setCustomAmount(value);
        if (value && !isNaN(value)) {
            setAmount(parseInt(value, 10));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !upiId || amount <= 0) {
            setStatusMessage('Please fill all the fields and select an amount.');
            return;
        }
        setIsLoading(true);
        setStatusMessage('Creating payment order...');

        try {
            const response = await fetch('http://localhost:5000/api/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phone, amount }),
            });

            const data = await response.json();

            if (!data.success) {
                setStatusMessage('❌ Error: Could not create payment order.');
                setIsLoading(false);
                return;
            }

            const options = {
                key: 'rzp_test_R7xNMtrcBOc5JY',
                amount: data.order.amount,
                currency: "INR",
                name: "Aryavarta Sangh",
                description: "Donation",
                order_id: data.order.id,
                prefill: {
                    name: name,
                    email: email,
                    contact: phone
                },
                handler: function (response) {
                    setStatusMessage('✅ Payment successful! Thank you for your donation.');
                    console.log(response);
                },
                modal: {
                    ondismiss: function() {
                        setStatusMessage('Payment was cancelled.');
                    }
                },
                method: {
                    upi: true
                },
                upi: {
                    vpa: upiId
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Payment Error:", error);
            setStatusMessage('❌ Error: Could not connect to the payment server.');
        }

        setIsLoading(false);
    };

    return (
        <div className="text-white">
            <div 
                className="relative flex flex-col items-center justify-center w-full h-96 md:h-[50vh]" 
                style={{ backgroundImage: `url(${peopleImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                    <h1 className="text-5xl font-bold md:text-7xl">DONATE</h1>
                    <div className="mt-4 text-sm font-semibold">
                        <span>HOME</span>
                        <span className="mx-2">|</span>
                        <span>DONATE US !</span>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Donate via UPI</h2>
                        <p className="mb-8 text-gray-400">Enter your details and UPI ID. We'll send a payment request directly to your UPI app.</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            </div>
                            <input type="tel" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            
                            <div>
                                <p className="mb-3 font-semibold">Choose an amount (₹)</p>
                                <div className="flex flex-wrap gap-3">
                                    {[101, 251, 501, 1001].map(val => (
                                        <button key={val} type="button" onClick={() => handleAmountClick(val)} className={`px-6 py-2 rounded-lg transition-colors ${amount === val && !customAmount ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>{val}</button>
                                    ))}
                                    <input type="number" placeholder="Custom" value={customAmount} onChange={handleCustomAmountChange} className="p-2 bg-gray-800 border border-gray-700 rounded-lg w-28 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                </div>
                            </div>

                            <input type="text" placeholder="yourname@upi" value={upiId} onChange={(e) => setUpiId(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            
                            <button type="submit" disabled={isLoading} className="w-full py-4 text-lg font-bold transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 disabled:bg-gray-500">
                                {isLoading ? 'Processing...' : `Pay ₹${amount}`}
                            </button>
                            {statusMessage && <p className="mt-4 text-center text-green-400">{statusMessage}</p>}
                        </form>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Donate via Bank Transfer</h2>
                        <p className="mb-8 text-gray-400">Following is the Bank Account Details</p>
                        <div className="space-y-4 text-lg">
                            <p><span className="font-semibold text-gray-400">Account Name -</span> Aryavarta Sangh</p>
                            <p><span className="font-semibold text-gray-400">Bank -</span> State Bank of India</p>
                            <p><span className="font-semibold text-gray-400">Branch -</span> Gwalior</p>
                            <p><span className="font-semibold text-gray-400">Account -</span> 12345678901</p>
                            <p><span className="font-semibold text-gray-400">IFSC Code -</span> SBIN0000123</p>
                        </div>
                        <p className="mt-8 text-gray-400">Please email all details to <span className="text-orange-400">info@aryavartasanghcentraloffice.com</span> after Donations</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateUs;
