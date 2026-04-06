import React, { useState, useEffect } from "react";
import { TrendingUp, Building, Calculator, MapPin, Wallet } from "lucide-react";
import Link from "next/link";

export default function MortgageCalculator() {
    const [installmentRate, setInstallmentRate] = useState("1");
    const [selectedProperty, setSelectedProperty] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedFloor, setSelectedFloor] = useState(null);
    const [plan, setPlan] = useState(null);

    const properties = {
        Lakeview: {
            categories: [
                {
                    name: "STUDIO - WITHOUT POOL",
                    units: [
                        { size: 419.58, floor: "4TH FLOOR",  price: 824777 },
                        { size: 420.44, floor: "8TH FLOOR",  price: 834777 },
                        { size: 416.24, floor: "8TH FLOOR",  price: 879777 },
                        { size: 426.58, floor: "31ST FLOOR", price: 899777 },
                        { size: 417.03, floor: "31ST FLOOR", price: 899777 },
                        { size: 417.06, floor: "31ST FLOOR", price: 899777 },
                        { size: 484.53, floor: "31ST FLOOR", price: 924777 },
                    ],
                },
                {
                    name: "STUDIO - WITH POOL",
                    units: [
                        { size: 419.04, floor: "15TH FLOOR", price: 899777 },
                        { size: 416.52, floor: "30TH FLOOR", price: 924777 },
                    ],
                },
                {
                    name: "1 BED APARTMENT - WITHOUT POOL",
                    units: [
                        { size: 753.80, floor: "6TH FLOOR",  price: 1264777 },
                        { size: 830.11, floor: "26TH FLOOR", price: 1349777 },
                    ],
                },
                {
                    name: "1 BED APARTMENT - WITH POOL",
                    units: [
                        { size: 867.14, floor: "2ND FLOOR",  price: 1384777 },
                        { size: 856.70, floor: "2ND FLOOR",  price: 1384777 },
                        { size: 856.70, floor: "3RD FLOOR",  price: 1384777 },
                        { size: 754.12, floor: "5TH FLOOR",  price: 1299777 },
                        { size: 867.14, floor: "7TH FLOOR",  price: 1394777 },
                        { size: 856.70, floor: "7TH FLOOR",  price: 1394777 },
                        { size: 753.80, floor: "8TH FLOOR",  price: 1304777 },
                        { size: 856.70, floor: "8TH FLOOR",  price: 1399777 },
                        { size: 856.70, floor: "9TH FLOOR",  price: 1399777 },
                        { size: 789.96, floor: "10TH FLOOR", price: 1399777 },
                        { size: 856.70, floor: "17TH FLOOR", price: 1424777 },
                    ],
                },
                {
                    name: "2 BED APARTMENT - WITH POOL",
                    units: [
                        { size: 1328.05, floor: "3RD FLOOR",  price: 2144777 },
                        { size: 1328.05, floor: "5TH FLOOR",  price: 2149777 },
                        { size: 1319.66, floor: "30TH FLOOR", price: 2349777 },
                        { size: 1319.66, floor: "31ST FLOOR", price: 2399777 },
                    ],
                },
                {
                    name: "3 BED DUPLEX - WITH POOL",
                    units: [
                        { size: 2633.71, floor: "TBD", price: 2100000 },
                    ],
                },
            ],
        },
       Garden: {
    categories: [
        {
            name: "STUDIO - WITHOUT POOL",
            units: [
                { size: 453.59, floor: "3RD FLOOR",  price: 814777 },
                { size: 438.09, floor: "5TH FLOOR",  price: 819777 },
                { size: 453.59, floor: "5TH FLOOR",  price: 819777 },
                { size: 427.97, floor: "6TH FLOOR",  price: 824777 },
                { size: 438.09, floor: "7TH FLOOR",  price: 824777 },
                { size: 453.59, floor: "7TH FLOOR",  price: 824777 },
                { size: 444.76, floor: "8TH FLOOR",  price: 829777 },
                { size: 453.59, floor: "8TH FLOOR",  price: 829777 },
                { size: 446.16, floor: "9TH FLOOR",  price: 824777 },
                { size: 438.09, floor: "9TH FLOOR",  price: 824777 },
                { size: 444.76, floor: "9TH FLOOR",  price: 829777 },
                { size: 444.76, floor: "10TH FLOOR", price: 829777 },
                { size: 444.76, floor: "11TH FLOOR", price: 834777 },
                { size: 438.09, floor: "13TH FLOOR", price: 839777 },
                { size: 444.76, floor: "13TH FLOOR", price: 849777 },
                { size: 453.59, floor: "13TH FLOOR", price: 849777 },
            ],
        },
        {
            name: "STUDIO - WITH POOL",
            units: [
                { size: 558.22, floor: "2ND FLOOR",  price: 904777 },
                { size: 474.58, floor: "8TH FLOOR",  price: 869777 },
                { size: 466.40, floor: "8TH FLOOR",  price: 869777 },
                { size: 458.76, floor: "8TH FLOOR",  price: 869777 },
                { size: 558.22, floor: "8TH FLOOR",  price: 924777 },
                { size: 474.58, floor: "9TH FLOOR",  price: 869777 },
                { size: 466.40, floor: "9TH FLOOR",  price: 869777 },
                { size: 458.76, floor: "9TH FLOOR",  price: 869777 },
                { size: 558.22, floor: "10TH FLOOR", price: 929777 },
                { size: 558.11, floor: "11TH FLOOR", price: 934777 },
                { size: 474.58, floor: "12TH FLOOR", price: 879777 },
                { size: 466.40, floor: "12TH FLOOR", price: 879777 },
                { size: 458.76, floor: "12TH FLOOR", price: 879777 },
                { size: 558.22, floor: "12TH FLOOR", price: 939777 },
                { size: 474.58, floor: "13TH FLOOR", price: 889777 },
                { size: 466.40, floor: "13TH FLOOR", price: 889777 },
            ],
        },
        {
            name: "1 BED APARTMENT - WITH STORE AND POOL",
            units: [
                { size: 744.65, floor: "1ST FLOOR",  price: 1279777 },
                { size: 962.19, floor: "2ND FLOOR",  price: 1334777 },
                { size: 831.19, floor: "2ND FLOOR",  price: 1284777 },
                { size: 885.01, floor: "2ND FLOOR",  price: 1294777 },
                { size: 839.59, floor: "2ND FLOOR",  price: 1284777 },
                { size: 962.40, floor: "3RD FLOOR",  price: 1339777 },
                { size: 831.19, floor: "3RD FLOOR",  price: 1289777 },
                { size: 962.19, floor: "4TH FLOOR",  price: 1344777 },
                { size: 746.48, floor: "4TH FLOOR",  price: 1279777 },
                { size: 831.19, floor: "4TH FLOOR",  price: 1309777 },
                { size: 746.48, floor: "5TH FLOOR",  price: 1279777 },
                { size: 839.59, floor: "5TH FLOOR",  price: 1299777 },
                { size: 962.19, floor: "6TH FLOOR",  price: 1354777 },
                { size: 962.40, floor: "7TH FLOOR",  price: 1384777 },
                { size: 746.48, floor: "7TH FLOOR",  price: 1289777 },
                { size: 962.19, floor: "8TH FLOOR",  price: 1394777 },
                { size: 746.48, floor: "8TH FLOOR",  price: 1299777 },
                { size: 831.19, floor: "8TH FLOOR",  price: 1329777 },
                { size: 885.01, floor: "8TH FLOOR",  price: 1384777 },
                { size: 839.59, floor: "8TH FLOOR",  price: 1329777 },
                { size: 962.40, floor: "9TH FLOOR",  price: 1399777 },
                { size: 746.48, floor: "9TH FLOOR",  price: 1304777 },
                { size: 831.19, floor: "9TH FLOOR",  price: 1324777 },
                { size: 885.01, floor: "9TH FLOOR",  price: 1384777 },
                { size: 839.59, floor: "9TH FLOOR",  price: 1329777 },
                { size: 962.19, floor: "10TH FLOOR", price: 1414777 },
                { size: 962.40, floor: "11TH FLOOR", price: 1424777 },
                { size: 839.59, floor: "11TH FLOOR", price: 1329777 },
                { size: 962.19, floor: "12TH FLOOR", price: 1434777 },
                { size: 962.40, floor: "13TH FLOOR", price: 1444777 },
                { size: 831.19, floor: "13TH FLOOR", price: 1349777 },
                { size: 885.01, floor: "13TH FLOOR", price: 1404777 },
                { size: 839.59, floor: "13TH FLOOR", price: 1349777 },
            ],
        },
        {
            name: "1 BED APARTMENT - WITH MAID AND POOL",
            units: [
                { size: 902.34, floor: "2ND FLOOR",  price: 1304777 },
                { size: 868.86, floor: "4TH FLOOR",  price: 1314777 },
                { size: 868.32, floor: "5TH FLOOR",  price: 1319777 },
                { size: 868.86, floor: "6TH FLOOR",  price: 1329777 },
                { size: 910.84, floor: "6TH FLOOR",  price: 1329777 },
                { size: 868.32, floor: "7TH FLOOR",  price: 1359777 },
                { size: 910.95, floor: "7TH FLOOR",  price: 1359777 },
                { size: 868.86, floor: "8TH FLOOR",  price: 1394777 },
                { size: 902.34, floor: "8TH FLOOR",  price: 1394777 },
                { size: 868.32, floor: "9TH FLOOR",  price: 1394777 },
                { size: 902.34, floor: "10TH FLOOR", price: 1389777 },
                { size: 868.32, floor: "11TH FLOOR", price: 1399777 },
                { size: 902.45, floor: "11TH FLOOR", price: 1399777 },
                { size: 910.95, floor: "11TH FLOOR", price: 1399777 },
                { size: 868.86, floor: "12TH FLOOR", price: 1409777 },
                { size: 902.34, floor: "12TH FLOOR", price: 1409777 },
                { size: 910.84, floor: "12TH FLOOR", price: 1409777 },
                { size: 902.45, floor: "13TH FLOOR", price: 1419777 },
                { size: 910.95, floor: "13TH FLOOR", price: 1419777 },
            ],
        },
        {
            name: "2 BED APARTMENT - WITH POOL",
            units: [
                { size: 1068.10, floor: "4TH FLOOR",  price: 1844777 },
                { size: 1068.10, floor: "6TH FLOOR",  price: 1849777 },
                { size: 1068.10, floor: "7TH FLOOR",  price: 1849777 },
                { size: 1068.10, floor: "9TH FLOOR",  price: 1854777 },
                { size: 1068.10, floor: "10TH FLOOR", price: 1854777 },
                { size: 1068.10, floor: "11TH FLOOR", price: 1859777 },
                { size: 1068.10, floor: "12TH FLOOR", price: 1874777 },
            ],
        },
        {
            name: "3 BED APARTMENT - WITH STORE AND POOL",
            units: [
                { size: 1591.34, floor: "1ST FLOOR", price: 2524777 },
                { size: 1659.90, floor: "1ST FLOOR", price: 2524777 },
            ],
        },
        {
            name: "3 BED DUPLEX - WITH POOL",
            units: [
                { size: 2235.23, floor: "2ND FLOOR",  price: 2999777 },
                { size: 2235.23, floor: "4TH FLOOR",  price: 3049777 },
                { size: 2235.23, floor: "6TH FLOOR",  price: 3189777 },
                { size: 2235.23, floor: "10TH FLOOR", price: 3199777 },
                { size: 2235.23, floor: "12TH FLOOR", price: 3249777 },
            ],
        },
    ],
},
    };

    const rentMapping = {
        Garden: { "STUDIO - WITHOUT POOL": 60000, "STUDIO - WITH POOL": 65000, "1 BED APARTMENT - WITH POOL": 85000, "3 BED APARTMENT - WITH POOL": 130000, "3 BED DUPLEX - WITH POOL": 160000 },
        Lakeview: { "STUDIO - WITHOUT POOL": 60000, "STUDIO - WITH POOL": 65000, "1 BED APARTMENT - WITH POOL": 85000, "2 BED APARTMENT - WITH POOL": 110000, "3 BED DUPLEX - WITH POOL": 160000 }
    };

    const availableCategories = selectedProperty ? properties[selectedProperty]?.categories || [] : [];

    // Get unique sizes for selected category (round to 1 decimal to group near-identical sizes)
    const uniqueSizes = selectedCategory
        ? [...new Map(
            selectedCategory.units.map(u => [Math.round(u.size * 10) / 10, u.size])
          ).values()]
        : [];

    // Get floors for selected size (match by rounding)
    const floorsForSize = selectedCategory && selectedSize
        ? selectedCategory.units
            .filter(u => Math.round(u.size * 10) / 10 === Math.round(selectedSize * 10) / 10)
            .filter((u, idx, arr) => arr.findIndex(x => x.floor === u.floor) === idx) // dedupe floors
        : [];

    // Get price from selected floor + size
    const selectedPrice = selectedCategory && selectedSize && selectedFloor
        ? selectedCategory.units.find(
            u => Math.round(u.size * 10) / 10 === Math.round(selectedSize * 10) / 10
              && u.floor === selectedFloor
          )?.price
        : null;

    const calculatePlan = () => {
        if (!selectedCategory || !selectedPrice || !installmentRate) return;
        const value = selectedPrice;
        const rate = parseFloat(installmentRate);
        const downPayment = value * 0.2;
        const monthlyPayment = value * (rate / 100);
        const keyHandoverAt = value * 0.56;
        const totalMonths = rate === 1 ? 80 : 96;
        setPlan({
            unitValue: value,
            downPayment,
            monthlyPayment,
            keyHandoverAt,
            totalMonths,
            totalYears: parseFloat((totalMonths / 12).toFixed(1)),
            projectedValue: value * 1.15,
            netWorth: (value * 1.15) - value,
            installmentRate: rate,
            property: selectedProperty,
            category: selectedCategory.name,
            size: selectedSize,
            floor: selectedFloor,
        });
    };

    const formatCurrency = (amount) =>
        new Intl.NumberFormat("en-AE", {
            style: "currency", currency: "AED", maximumFractionDigits: 0,
        }).format(amount);

    const selectClass = "w-full px-4 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#CCAB64]/50 outline-none text-white appearance-none cursor-pointer";

    return (
        <div className="min-h-screen bg-[#252938] text-slate-200 selection:bg-[#CCAB64]/30">
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#CCAB64]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <header className="pt-16 pb-12 px-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#CCAB64] text-xs font-semibold uppercase tracking-wider mb-6">
                    <Building className="w-3 h-3" /> Real Estate Investment
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                    Own a Dubai Property <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCAB64] via-[#FAECC9] to-[#CCAB64]">Effortlessly</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto text-lg">
                    Premium properties with flexible 0.5% – 1% monthly installments.
                </p>
            </header>

            <main className="max-w-6xl mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-[#CCAB64]/20 rounded-lg">
                                <Calculator className="w-5 h-5 text-[#CCAB64]" />
                            </div>
                            <h2 className="text-xl font-semibold text-white">Plan Builder</h2>
                        </div>

                        <div className="space-y-6">
                            {/* Rate Toggle */}
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">Installment Rate</label>
                                <div className="grid grid-cols-2 gap-3 p-1 bg-black/20 rounded-xl border border-white/5">
                                    {["1", "0.5"].map((rate) => (
                                        <button
                                            key={rate}
                                            onClick={() => setInstallmentRate(rate)}
                                            className={`py-3 rounded-lg text-sm font-medium transition-all ${installmentRate === rate ? 'bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-black shadow-lg shadow-[#CCAB64]/20' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            {rate}% Monthly
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Property Selection */}
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">Select Location</label>
                                <select
                                    value={selectedProperty}
                                    onChange={(e) => {
                                        setSelectedProperty(e.target.value);
                                        setSelectedCategory(null);
                                        setSelectedSize(null);
                                        setSelectedFloor(null);
                                        setPlan(null);
                                    }}
                                    className={selectClass}
                                >
                                    <option value="" className="bg-[#1a1d2e]">Choose Project</option>
                                    <option value="Garden" className="bg-[#1a1d2e]">Empire Garden</option>
                                    <option value="Lakeview" className="bg-[#1a1d2e]">Empire Lakeview</option>
                                </select>
                            </div>

                            {/* Category Selection */}
                            {selectedProperty && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Unit Type</label>
                                    <select
                                        value={selectedCategory?.name || ""}
                                        onChange={(e) => {
                                            setSelectedCategory(availableCategories.find(cat => cat.name === e.target.value) || null);
                                            setSelectedSize(null);
                                            setSelectedFloor(null);
                                            setPlan(null);
                                        }}
                                        className={selectClass}
                                    >
                                        <option value="">Select Unit Type</option>
                                        {availableCategories.map((cat, idx) => (
                                            <option key={idx} value={cat.name}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Size Selection — deduplicated */}
                            {selectedCategory && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Unit Size</label>
                                    <select
                                        value={selectedSize || ""}
                                        onChange={(e) => {
                                            setSelectedSize(parseFloat(e.target.value));
                                            setSelectedFloor(null);
                                            setPlan(null);
                                        }}
                                        className={selectClass}
                                    >
                                        <option value="">Select Size</option>
                                        {uniqueSizes.map((size, idx) => (
                                            <option key={idx} value={size}>{size} sq. ft</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Floor Selection — filtered by selected size */}
                            {selectedSize && floorsForSize.length > 0 && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Floor</label>
                                    <select
                                        value={selectedFloor || ""}
                                        onChange={(e) => {
                                            setSelectedFloor(e.target.value);
                                            setPlan(null);
                                        }}
                                        className={selectClass}
                                    >
                                        <option value="">Select Floor</option>
                                        {floorsForSize.map((u, idx) => (
                                            <option key={idx} value={u.floor}>
                                                {u.floor} — AED {u.price.toLocaleString()}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Selected Price Preview */}
                            {selectedPrice && (
                                <div className="bg-[#CCAB64]/10 border border-[#CCAB64]/30 rounded-xl px-4 py-3 flex justify-between items-center animate-in fade-in duration-300">
                                    <span className="text-sm text-gray-400">Selling Price</span>
                                    <span className="text-[#CCAB64] font-bold text-lg">{formatCurrency(selectedPrice)}</span>
                                </div>
                            )}

                            <button
                                onClick={calculatePlan}
                                disabled={!selectedPrice || !installmentRate}
                                className="w-full group relative overflow-hidden bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-black py-5 rounded-xl font-bold transition-all hover:opacity-90"
                            >
                                <span className="relative z-10 flex items-center font-medium justify-center gap-2">
                                    Calculate Full Strategy
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Panel */}
                <div className="lg:col-span-7 space-y-6">
                    {!plan ? (
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-3xl text-gray-500 p-8 text-center">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                                <Wallet className="w-8 h-8 opacity-20" />
                            </div>
                            <p className="text-lg">Select a property and installment rate to visualize your investment journey.</p>
                        </div>
                    ) : (
                        <div className="animate-in fade-in zoom-in-95 duration-500 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <ResultStat label="Down Payment" value={formatCurrency(plan.downPayment)} sub="20% Booking" />
                                <ResultStat label="Monthly" value={formatCurrency(plan.monthlyPayment)} sub={`${plan.installmentRate}% Rate`} />
                                {installmentRate == 0.5 && <>
                                    <ResultStat label="0-11 Months" value={formatCurrency(plan.monthlyPayment)} sub={`${plan.installmentRate}% Rate`} />
                                    <ResultStat label="12 Month" value={formatCurrency(plan.monthlyPayment * 24)} sub={`${plan.installmentRate * 24}% Rate`} />
                                    <ResultStat label="13-23 Month" value={formatCurrency(plan.monthlyPayment)} sub={`${plan.installmentRate}% Rate`} />
                                    <ResultStat label="24 Month" value={formatCurrency(plan.monthlyPayment * 22)} sub={`${plan.installmentRate * 24 - 1}% Rate`} />
                                    <ResultStat label="25-35 Month" value={formatCurrency(plan.monthlyPayment)} sub={`${plan.installmentRate}% Rate`} />
                                    <ResultStat label="36 Month" value={formatCurrency(plan.monthlyPayment * 21)} sub={`${plan.installmentRate * 24 - 1.5}% Rate`} />
                                </>}
                                <ResultStat label="Duration" value={`${plan.totalYears} yrs`} sub={`${plan.totalMonths} Installments`} />
                                <ResultStat
                                    label={`Equity (${installmentRate == 0.5 ? '70%' : '56%'})`}
                                    value={formatCurrency((plan.unitValue * (installmentRate == 0.5 ? 70 : 56)) / 100)}
                                    sub="At Handover"
                                />
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                                <div className="flex justify-between items-end mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Pay as You Build</h3>
                                        <p className="text-sm text-gray-400">During Construction</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-[#CCAB64]">{installmentRate == 0.5 ? "70%" : "56%"}</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Handover Equity</p>
                                    </div>
                                </div>

                                <div className="relative h-4 bg-black/40 rounded-full overflow-hidden mb-8 p-1">
                                    <div className="h-full bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] rounded-full shadow-[0_0_20px_rgba(204,171,100,0.4)]" style={{ width: '56%' }} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-green-500/10 rounded-lg"><TrendingUp className="w-5 h-5 text-green-400" /></div>
                                        <div>
                                            {installmentRate == 0.5 ? (<>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">EST. YEARLY RENTAL PROFIT</p>
                                                <p className="text-xl font-bold text-white">{rentMapping[plan.property]?.[plan.category] ? formatCurrency(rentMapping[plan.property][plan.category] - (plan.monthlyPayment * 12)) : 'Contact for ROI'}</p>
                                                <p className="text-xs text-green-400 font-medium">After excluding 0.5% monthly payments for 5 years (30%)</p>
                                            </>) : (<>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Projected ROI (3Y)</p>
                                                <p className="text-xl font-bold text-white">{formatCurrency(plan.projectedValue)}</p>
                                                <p className="text-xs text-green-400 font-medium">+{formatCurrency(plan.netWorth)} Net Gain</p>
                                            </>)}
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-blue-500/10 rounded-lg"><MapPin className="w-5 h-5 text-blue-400" /></div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Est. Yearly Rent</p>
                                            <p className="text-xl font-bold text-white">{rentMapping[plan.property]?.[plan.category] ? formatCurrency(rentMapping[plan.property][plan.category]) : 'Contact for ROI'}</p>
                                            <p className="text-xs text-blue-400 font-medium">High Demand Area</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Secure this Unit?</h3>
                                    <p className="text-white mb-6">Get the complete 160-month PDF breakdown instantly on WhatsApp.</p>
                                    <Link href="https://wa.me/971800700007" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-black text-white px-10 py-4 rounded-xl cursor-pointer font-bold hover:bg-zinc-900 transition-colors shadow-xl">
                                            WhatsApp This Plan
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

function ResultStat({ label, value, sub }) {
    return (
        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-white/20 transition-colors">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{label}</p>
            <p className="text-lg font-bold text-white mb-1">{value}</p>
            <p className="text-[10px] text-gray-400 font-medium">{sub}</p>
        </div>
    );
}