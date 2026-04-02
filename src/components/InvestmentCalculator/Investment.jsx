import React, { useState, useEffect } from "react";
import { User, Key, CheckCircle, TrendingUp, Building, ArrowRight, Calculator, MapPin, Wallet } from "lucide-react";
import Link from "next/link";
export default function MortgageCalculator() {
    const [installmentRate, setInstallmentRate] = useState("1");
    const [selectedProperty, setSelectedProperty] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [plan, setPlan] = useState(null);
        const equity= installmentRate === 0.5 ? 70 : 50 ;

    const properties = {
        Garden: {
            categories: [
                { name: "STUDIO - WITHOUT POOL", size: "427.97 TO 453.70 SQ. FT", price: 750000 },
                { name: "STUDIO - WITH POOL", size: "469.72 TO 558.11 SQ. FT", price: 820000 },
                { name: "1 BED APARTMENT - WITH POOL", size: "746.00 TO 962.00 SQ. FT", price: 950000 },
                { name: "3 BED APARTMENT - WITH POOL", size: "1659.90 SQ. FT", price: 1650000 },
                { name: "3 BED DUPLEX - WITH POOL", size: "2235.23 SQ. FT", price: 2200000 },
            ],
        },
        Lakeview: {
            categories: [
                { name: "STUDIO - WITHOUT POOL", size: "410.75 TO 484.00 SQ. FT", price: 630000 },
                { name: "STUDIO - WITH POOL", size: "407.09 TO 425.39 SQ. FT", price: 690000 },
                { name: "1 BED APARTMENT - WITH POOL", size: "753.80 TO 867.14 SQ. FT", price: 880000 },
                { name: "2 BED APARTMENT - WITH POOL", size: "1319.66 SQ. FT", price: 1350000 },
                { name: "3 BED DUPLEX - WITH POOL", size: "2633.71 SQ. FT", price: 2100000 },
            ],
        },
    };
useEffect(()=>{
    console.log("plan",plan)
},[plan])
    const rentMapping = {
        Garden: { "STUDIO - WITHOUT POOL": 60000, "STUDIO - WITH POOL": 65000, "1 BED APARTMENT - WITH POOL": 85000, "3 BED APARTMENT - WITH POOL": 130000, "3 BED DUPLEX - WITH POOL": 160000 },
        Lakeview: { "STUDIO - WITHOUT POOL": 60000, "STUDIO - WITH POOL": 65000, "1 BED APARTMENT - WITH POOL": 85000, "2 BED APARTMENT - WITH POOL": 110000, "3 BED DUPLEX - WITH POOL": 160000 }
    };

    const availableCategories = selectedProperty ? properties[selectedProperty]?.categories || [] : [];

    const calculatePlan = () => {

        if (!selectedCategory || !installmentRate) return;
        const value = selectedCategory.price;
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
        });
    };

    const formatCurrency = (amount) =>
        new Intl.NumberFormat("en-AE", {
            style: "currency", currency: "AED", maximumFractionDigits: 0,
        }).format(amount);

    return (
        <div className="min-h-screen bg-[#252938] text-slate-200 selection:bg-[#CCAB64]/30">
            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#CCAB64]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            {/* Header Section */}
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

                {/* Configuration Panel */}
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
                                            className={`py-3 rounded-lg text-sm font-medium transition-all ${installmentRate === rate ? 'bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]  text-black shadow-lg shadow-[#CCAB64]/20' : 'text-gray-400 hover:text-white'}`}
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
                                    onChange={(e) => { setSelectedProperty(e.target.value); setSelectedCategory(""); }}
                                    className="w-full px-4 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#CCAB64]/50 outline-none text-white appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-[#1a1d2e]">Choose Project</option>
                                    <option value="Garden" className="bg-[#1a1d2e]">Empire Garden</option>
                                    <option value="Lakeview" className="bg-[#1a1d2e]">Empire Lakeview </option>
                                </select>
                            </div>

                            {/* Category Selection */}
                            {selectedProperty && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Unit Type</label>
                                    <select
                                        value={selectedCategory?.name || ""}
                                        onChange={(e) => setSelectedCategory(availableCategories.find(cat => cat.name === e.target.value))}
                                        className="w-full px-4 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#CCAB64]/50 outline-none text-white appearance-none cursor-pointer"
                                    >
                                        <option value="">Select Unit</option>
                                        {availableCategories.map((cat, idx) => (
                                            <option key={idx} value={cat.name}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Unit Card Preview */}
                            {selectedCategory && (
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Market Price</p>
                                        <p className="text-2xl font-bold text-white tracking-tight">{formatCurrency(selectedCategory.price)}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Area</p>
                                        <p className="text-sm font-medium text-gray-300">{selectedCategory.size.split(' ')[0]} SQFT</p>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={calculatePlan}
                                disabled={!selectedCategory || !installmentRate}
                                className="w-full group relative overflow-hidden bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-black py-5 rounded-xl font-bold transition-all hover:opacity-90 "
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
                            {/* Summary Grid */}
                            <div className="grid grid-cols-2  gap-4">
                                <ResultStat label="Down Payment" value={formatCurrency(plan.downPayment)} sub="20% Booking" />
                                <ResultStat label="Monthly" value={formatCurrency(plan.monthlyPayment)} sub={`${plan.installmentRate}% Rate`} />
                                {installmentRate == 0.5 &&
                          <>      <ResultStat label="0-11 Months" value={formatCurrency(plan.monthlyPayment)} sub={`${plan.installmentRate}% Rate`} />
                                <ResultStat label="12 Month" value={formatCurrency(plan.monthlyPayment*24)} sub={`${plan.installmentRate*24}% Rate`} />
                                <ResultStat label="13-23 Month" value={formatCurrency(plan.monthlyPayment)} sub={`${plan.installmentRate}% Rate`} />
                                <ResultStat label="24 Month" value={formatCurrency(plan.monthlyPayment*22)} sub={`${plan.installmentRate*24-1}% Rate`} />
                                <ResultStat label="25-35 Month" value={formatCurrency(plan.monthlyPayment)} sub={`${plan.installmentRate}% Rate`} />
                                <ResultStat label="36 Month" value={formatCurrency(plan.monthlyPayment*21)} sub={`${plan.installmentRate*24-1.5}% Rate`} />
                              </>  }
                                <ResultStat label="Duration" value={`${plan.totalYears} yrs`} sub={`${plan.totalMonths} Installments`} />
                                <ResultStat
                                    label={`Equity (${installmentRate ==0.5 ? '70%' : '50%'} )`}
                                    value={formatCurrency((plan.unitValue * (installmentRate == 0.5 ? 70:50)) / 100)}
                                    sub="At Handover"
                                />
                            </div>

                            {/* Investment Progress Card */}
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                                <div className="flex justify-between items-end mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Pay as You Build</h3>
                                        <p className="text-sm text-gray-400">During Construction </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-[#CCAB64]">   {installmentRate == 0.5 ? "70%":"50%"}</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Handover Equity</p>
                                    </div>
                                </div>

                                <div className="relative h-4 bg-black/40 rounded-full overflow-hidden mb-8 p-1">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] rounded-full shadow-[0_0_20px_rgba(204,171,100,0.4)]"
                                        style={{ width: '56%' }}
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full flex justify-between px-2 items-center pointer-events-none">
                                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-green-500/10 rounded-lg"><TrendingUp className="w-5 h-5 text-green-400" /></div>
                                        <div>
                                           {installmentRate == 0.5 ? (<>
                      
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">EST. YEARLY RENTAL PROFIT</p>
                                            <p className="text-xl font-bold text-white">  {rentMapping[plan.property]?.[plan.category] 
    ? formatCurrency(rentMapping[plan.property][plan.category] - (plan.monthlyPayment * 12)) 
    : 'Contact for ROI'}
</p>
                                            <p className="text-xs text-green-400 font-medium"> After excluding 0.5% monthly payments for 5 years ( 30% )
</p>
                      </>): (<>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Projected ROI (3Y)</p>
                                            <p className="text-xl font-bold text-white">{formatCurrency(plan.projectedValue)}</p>
                                            <p className="text-xs text-green-400 font-medium">+{formatCurrency(plan.netWorth)} Net Gain</p>
                      </>)
                        }  
                      
                       </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-blue-500/10 rounded-lg"><MapPin className="w-5 h-5 text-blue-400" /></div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Est. Yearly Rent</p>
                                            <p className="text-xl font-bold text-white">
                                                {rentMapping[plan.property]?.[plan.category] ? formatCurrency(rentMapping[plan.property][plan.category]) : 'Contact for ROI'}
                                            </p>
                                            <p className="text-xs text-blue-400 font-medium">High Demand Area</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}

                            <div className="bg-white/5 border border-white/10  rounded-3xl p-8 text-center relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Secure this Unit?</h3>
                                    <p className="text-white mb-6 ">Get the complete 160-month PDF breakdown instantly on WhatsApp.</p>
                                    <Link
                                        href="https://wa.me/971800700007"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
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

// Helper component for small stat cards
function ResultStat({ label, value, sub }) {
    return (
        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-white/20 transition-colors">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{label}</p>
            <p className="text-lg font-bold text-white mb-1">{value}</p>
            <p className="text-[10px] text-gray-400 font-medium">{sub}</p>
        </div>
    );
}
