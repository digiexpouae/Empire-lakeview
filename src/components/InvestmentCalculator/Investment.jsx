import React, { useState } from "react";
import { User, Key, CheckCircle, TrendingUp } from "lucide-react";

export default function MortgageCalculator() {
    const [unitValue, setUnitValue] = useState("");
    const [installmentRate, setInstallmentRate] = useState("");
    const [selectedProperty, setSelectedProperty] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [plan, setPlan] = useState(null);

    const properties = {
        "Garden": {
            categories: [
                { name: "STUDIO - WITHOUT POOL", size: "427.97 TO 453.70 SQ. FT" },
                { name: "STUDIO - WITH POOL", size: "469.72 TO 558.11 SQ. FT" },
                { name: "1 BED APARTMENT - WITH POOL", size: "746.00 TO 962.00 SQ. FT" },
                { name: "3 BED APARTMENT - WITH POOL", size: "1659.90 SQ. FT" },
                { name: "3 BED DUPLEX - WITH POOL", size: "2,235.23 SQ. FT" }
            ]
        },
        "Lakeview": {
            categories: [
                { name: "STUDIO - WITHOUT POOL", size: "410.75 TO 484.00 SQ. FT" },
                { name: "STUDIO - WITH POOL", size: "407.09 TO 425.39 SQ. FT" },
                { name: "1 BED APARTMENT - WITHOUT POOL", size: "753.80 TO 830.11 SQ. FT" },
                { name: "1 BED APARTMENT - WITH POOL", size: "753.80 TO 867.14 SQ. FT" },
                { name: "2 BED APARTMENT - WITH POOL", size: "1319.66 SQ. FT" },
                { name: "3 BED DUPLEX - WITH POOL", size: "2633.71 SQ. FT" }
            ]
        },
        "Livings": {
            categories: [
                { name: "STUDIO APARTMENT", size: "400.00 TO 500.00 SQ. FT" },
                { name: "1 BED APARTMENT", size: "700.00 TO 900.00 SQ. FT" },
                { name: "2 BED APARTMENT", size: "1100.00 TO 1400.00 SQ. FT" },
                { name: "3 BED APARTMENT", size: "1600.00 TO 2000.00 SQ. FT" }
            ]
        }
    };

    // Add this rent mapping at the top, just below the properties object
    const rentMapping = {
        "Garden": {
            "STUDIO - WITHOUT POOL": 60000,
            "STUDIO - WITH POOL": 65000,
            "1 BED APARTMENT - WITHOUT POOL": 80000,
            "1 BED APARTMENT - WITH POOL": 85000,
            "1 BED APARTMENT - WITH MAID": 90000,
            "2 BED APARTMENT - WITH POOL": 110000,
            "3 BED APARTMENT - WITH POOL": 130000,
            "3 BED DUPLEX - WITH POOL": 160000
        },
        "Lakeview": {
            "STUDIO - WITHOUT POOL": 60000,
            "STUDIO - WITH POOL": 65000,
            "1 BED APARTMENT - WITHOUT POOL": 80000,
            "1 BED APARTMENT - WITH POOL": 85000,
            "1 BED APARTMENT - WITH MAID": 90000,
            "2 BED APARTMENT - WITH POOL": 110000,
            "3 BED DUPLEX - WITH POOL": 160000
        }
    };


    const availableCategories = selectedProperty ? properties[selectedProperty]?.categories || [] : [];

    const calculatePlan = () => {
        const value = parseFloat(unitValue);
        if (!value || value <= 0 || !installmentRate) return;

        const downPayment = value * 0.2;
        const rate = parseFloat(installmentRate);
        const monthlyPayment = value * (rate / 100);
        const keyHandoverAt = value * 0.56;
        const monthsToKey = Math.ceil((keyHandoverAt - downPayment) / monthlyPayment);
        const totalMonths = rate === 1 ? 80 : 160;
        const totalYears = (totalMonths / 12).toFixed(1);

        setPlan({
            unitValue: value,
            downPayment,
            monthlyPayment,
            keyHandoverAt,
            monthsToKey,
            totalMonths,
            totalYears,
            monthsAfterKey: totalMonths - monthsToKey,
            installmentRate: rate,
            property: selectedProperty,
            category: selectedCategory
        });
    };

    const formatCurrency = (amount) =>
        new Intl.NumberFormat("en-AE", {
            style: "currency",
            currency: "AED",
            maximumFractionDigits: 0,
        }).format(amount);

    const progressPercentage = plan ? ((plan.downPayment / plan.unitValue) * 100) : 0;
    const keyHandoverPercentage = 56;

    return (
        <div className="min-h-screen bg-[#1a1d2e] ">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a1d2e] to-[#252938] text-white  py-8 px-4 border-b border-white/10">
                <div className="max-w-4xl mx-auto text-center ">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Own a Dubai Property from  <span className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] bg-clip-text text-transparent">
                            1% or 0.5% Monthly

                        </span>
                    </h1>
                    <p className="text-gray-400 mt-2">Flexible payment plans for modern investors</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-[#252938] border border-white/10 rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">  1% or 0.5% Payment Plan Calculator</h2>

                    {/* Input Form */}
                    <div className="space-y-6">
                        {/* Property Value Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Enter Property Value (AED)
                            </label>
                            <input
                                type="number"
                                value={unitValue}
                                onChange={(e) => setUnitValue(e.target.value)}
                                placeholder="e.g. 1,200,000"
                                className="w-full px-4 py-3 bg-[#1a1d2e] border border-white/20 rounded-lg focus:ring-2 focus:ring-[#CCAB64] focus:border-[#CCAB64] outline-none text-white placeholder-gray-500"
                            />
                        </div>

                        {/* Installment Rate Dropdown */}
                        {unitValue && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Select Monthly Installment Rate
                                </label>
                                <select
                                    value={installmentRate}
                                    onChange={(e) => setInstallmentRate(e.target.value)}
                                    className="w-full px-4 py-3 bg-[#1a1d2e] border border-white/20 rounded-lg focus:ring-2 focus:ring-[#CCAB64] focus:border-[#CCAB64] outline-none text-white"
                                >
                                    <option value="" className="bg-[#252938] text-white">Choose installment rate</option>
                                    <option value="1" className="bg-[#252938] text-white">1% Monthly</option>
                                    <option value="0.5" className="bg-[#252938] text-white">0.5% Monthly</option>
                                </select>
                            </div>
                        )}

                        {/* Property Type Dropdown */}
                        {installmentRate && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Select Property Type
                                </label>
                                <select
                                    value={selectedProperty}
                                    onChange={(e) => {
                                        setSelectedProperty(e.target.value);
                                        setSelectedCategory("");
                                    }}
                                    className="w-full px-4 py-3 bg-[#1a1d2e] border border-white/20 rounded-lg focus:ring-2 focus:ring-[#CCAB64] focus:border-[#CCAB64] outline-none text-white"
                                >
                                    <option value="" className="bg-[#252938] text-white">Choose property type</option>
                                    <option value="Garden" className="bg-[#252938] text-white">Garden</option>
                                    <option value="Lakeview" className="bg-[#252938] text-white">Lakeview</option>
                                    <option value="Livings" className="bg-[#252938] text-white">Livings</option>
                                </select>
                            </div>
                        )}

                        {/* Category Dropdown */}
                        {selectedProperty && availableCategories.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Select Property Category
                                </label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-3 bg-[#1a1d2e] border border-white/20 rounded-lg focus:ring-2 focus:ring-[#CCAB64] focus:border-[#CCAB64] outline-none text-white"
                                >
                                    <option value="" className="bg-[#252938] text-white">Choose category</option>
                                    {availableCategories.map((cat, idx) => (
                                        <option key={idx} value={cat.name} className="bg-[#252938] text-white">
                                            {cat.name} - SIZE: {cat.size}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Calculate Button */}
                        {selectedProperty && (
                            <button
                                onClick={calculatePlan}
                                className="w-full bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-black py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                            >
                                Calculate Payment Plan
                            </button>
                        )}

                        {/* Rent Display */}
                        {selectedCategory && rentMapping[selectedProperty]?.[selectedCategory] && (
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Estimated Rent (AED/year)</label>
                                <div className="text-lg font-semibold text-white">
                                    {new Intl.NumberFormat("en-AE", {
                                        style: "currency",
                                        currency: "AED",
                                        maximumFractionDigits: 0,
                                    }).format(rentMapping[selectedProperty][selectedCategory])}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Summary Cards - Show immediately after input */}
                    {plan && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-lg text-white rounded-xl p-4 shadow-lg">
                                <div className="text-xs font-medium mb-1">20% Down Payment</div>
                                <div className="text-lg md:text-xl font-bold">{formatCurrency(plan.downPayment)}</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg text-white rounded-xl p-4 shadow-lg">
                                <div className="text-xs font-medium mb-1">{plan.installmentRate}% Monthly ({plan.totalMonths} Months)</div>
                                <div className="text-lg md:text-xl font-bold">{formatCurrency(plan.monthlyPayment)}</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg text-white rounded-xl p-4 shadow-lg">
                                <div className="text-xs font-medium mb-1">Total Duration</div>
                                <div className="text-lg md:text-xl font-bold">{plan.totalYears} Years</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg text-white rounded-xl p-4 shadow-lg">                                <div className="text-xs font-medium mb-1">Equity by Handover (56%)</div>
                                <div className="text-lg md:text-xl font-bold">{formatCurrency(plan.keyHandoverAt)}</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Section */}
                {plan && (
                    <>
                        {/* Pay as You Build Progress */}
                        <div className="bg-[#252938] border border-white/10 rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                            <h3 className="text-xl font-bold text-white mb-4">Pay as You Build</h3>
                            <div className="relative">
                                <div className="w-full bg-[#1a1d2e] rounded-full h-4 border border-white/10">
                                    <div
                                        className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] h-4 rounded-full transition-all duration-500"
                                        style={{ width: `${keyHandoverPercentage}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-gray-400">
                                    <span>20% Today</span>
                                    <span>56% by Handover</span>
                                    <span>100% in {plan.totalYears} Years</span>
                                </div>
                            </div>
                        </div>

                        {/* Equity Growth */}
                        <div className="bg-[#252938] border border-white/10 rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                            <h3 className="text-xl font-bold text-white mb-4">Equity Growth</h3>
                            <div className="relative mb-4">
                                <div className="w-full bg-[#1a1d2e] rounded-full h-4 border border-white/10">
                                    <div
                                        className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] h-4 rounded-full transition-all duration-500"
                                        style={{ width: `${keyHandoverPercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300 mb-2">
                                56% Equity by Handover = {formatCurrency(plan.keyHandoverAt)}
                            </p>
                            <p className="text-sm text-gray-300">
                                Projected Value in 3 Years: <span className="font-semibold text-[#CCAB64]">{formatCurrency(plan.unitValue * 1.15)}</span>
                            </p>
                        </div>

                        {/* Who Is This Plan For */}
                        <div className="bg-[#252938] border border-white/10 rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                            <h3 className="text-xl font-bold text-white mb-6">Who Is This Plan For?</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-2 bg-[#CCAB64]/20 rounded-full flex items-center justify-center">
                                        <User className="w-6 h-6 text-[#CCAB64]" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-300">Salary Buyers</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-2 bg-[#CCAB64]/20 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-[#CCAB64]" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-300">Investors</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-2 bg-[#CCAB64]/20 rounded-full flex items-center justify-center">
                                        <Key className="w-6 h-6 text-[#CCAB64]" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-300">End Users</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-2 bg-[#CCAB64]/20 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-[#CCAB64]" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-300">Overseas Buyers</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-lg p-8 text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                Get Your {installmentRate}% Payment Breakdown
                            </h3>
                            <p className=" mb-6">Get the entire breakdown of this plan</p>
                            <button className="bg-[#1a1d2e] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
                                WhatsApp Me This Plan
                            </button>
                        </div>

                        {/* Property Details Summary */}
                        {(plan.property || plan.category) && (
                            <div className="bg-[#252938] border border-white/10 rounded-2xl shadow-lg p-6 md:p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Selected Property Details</h3>
                                <div className="space-y-3">
                                    {plan.property && (
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span className="text-gray-400">Property Type:</span>
                                            <span className="font-semibold text-white">{plan.property}</span>
                                        </div>
                                    )}
                                    {plan.category && (
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span className="text-gray-400">Category:</span>
                                            <span className="font-semibold text-white">{plan.category}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-gray-400">Property Value:</span>
                                        <span className="font-semibold text-white">{formatCurrency(plan.unitValue)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Installment Rate:</span>
                                        <span className="font-semibold text-white">{plan.installmentRate}% Monthly</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}