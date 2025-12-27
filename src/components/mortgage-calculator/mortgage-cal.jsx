// import React, { useState } from 'react';
// import { Home, Key, CheckCircle, TrendingUp } from 'lucide-react';

// export default function MortgageCalculator() {
//     const [unitValue, setUnitValue] = useState('');
//     const [plan, setPlan] = useState(null);

//     const calculatePlan = () => {
//         const value = parseFloat(unitValue);
//         if (!value || value <= 0) return;

//         const downPayment = value * 0.20;
//         const remainingAfterDown = value * 0.80;
//         const monthlyPayment = value * 0.01;
//         const keyHandoverAt = value * 0.56;
//         const monthsToKey = Math.ceil((keyHandoverAt - downPayment) / monthlyPayment);
//         const totalMonths = 80;

//         setPlan({
//             unitValue: value,
//             downPayment,
//             remainingAfterDown,
//             monthlyPayment,
//             keyHandoverAt,
//             monthsToKey,
//             totalMonths,
//             monthsAfterKey: totalMonths - monthsToKey
//         });
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-AE', {
//             style: 'currency',
//             currency: 'AED',
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     return (
//         <div className="p-4 md:p-8" style={{
//             backgroundColor: '#1a1d2e'
//         }}>
//             {/* Header */}
//             <div className="max-w-xl mx-auto mb-6">
//                 <div className="rounded-3xl p-8 " style={{
//                 }}>
//                     <div className="flex items-center gap-4 mb-2">
//                         <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{
//                         }}>
//                             <Home className="w-8 h-8 text-white" />
//                         </div>
//                         <div>
//                             <h1 className="text-xl font-medium text-white drop-shadow-lg">Mortgage Calculator</h1>
//                             <p className="text-gray-400 text-sm mt-1">Plan your property investment journey</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-3xl mx-auto">
//                 {/* Main Content Card */}
//                 <div className="rounded-3xl shadow-2xl p-8" style={{
//                 }}>
//                     {/* Input Section */}
//                     <div className="mb-8">
//                         <label className="block text-lg font-semibold text-white mb-3">
//                             Enter Property Value
//                         </label>
//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <input
//                                 type="number"
//                                 value={unitValue}
//                                 onChange={(e) => setUnitValue(e.target.value)}
//                                 placeholder="e.g., 1,000,000"
//                                 className="flex-1 px-6 py-4  rounded-2xl focus:ring-1 outline-none text-md font-medium transition-all text-white"

//                             />
//                             <button
//                                 onClick={calculatePlan}
//                                 className="px-10 py-4 text-black font-medium rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 text-md"
//                                 style={{
//                                     background: 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)'
//                                 }}
//                             >
//                                 Calculate Plan
//                             </button>
//                         </div>
//                     </div>

//                     {/* Payment Plan Display */}
//                     {plan && (
//                         <div className="space-y-8">
//                             {/* Summary Cards */}
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                 <div className="rounded-2xl p-6 shadow-lg  transition-transform hover:scale-105" style={{
//                                 }}>
//                                     <div className="text-sm font-medium text-white/90 mb-2">Down Payment (20%)</div>
//                                     <div className="text-3xl font-medium text-white drop-shadow">{formatCurrency(plan.downPayment)}</div>
//                                     <div className="mt-2 text-xs text-white/80">Pay upfront to begin</div>
//                                 </div>

//                                 <div className="rounded-2xl p-6 shadow-lg transition-transform hover:scale-105" style={{

//                                 }}>
//                                     <div className="text-sm font-medium text-gray-400 mb-2">Monthly Payment (1%)</div>
//                                     <div className="text-3xl font-medium text-white drop-shadow">{formatCurrency(plan.monthlyPayment)}</div>
//                                     <div className="mt-2 text-xs text-gray-400">Fixed monthly amount</div>
//                                 </div>

//                                 <div className="rounded-2xl p-6 shadow-lg  text-white transition-transform hover:scale-105" style={{

//                                 }}>
//                                     <div className="text-sm font-medium mb-2">Payment Period</div>
//                                     <div className="text-3xl font-medium">{plan.totalMonths} months</div>
//                                     <div className="mt-2 text-xs" >Total duration</div>
//                                 </div>
//                             </div>

//                             {/* Payment Timeline */}
//                             <div className="rounded-3xl p-8 shadow-xl" style={{ backgroundColor: '#1a1d2e' }}>
//                                 <h2 className="text-2xl font-medium mb-8 flex items-center gap-3 text-white">
//                                     <TrendingUp className="w-6 h-6" style={{ color: '#CCAB64' }} />
//                                     Your Payment Journey
//                                 </h2>

//                                 <div className="space-y-6">
//                                     {/* Step 1 */}
//                                     <div className="flex gap-6">
//                                         <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-black font-medium text-lg shadow-lg" style={{
//                                             background: 'linear-gradient(135deg, #CCAB64 0%, #e6c888 100%)'
//                                         }}>
//                                             1
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="font-medium text-xl mb-2 text-white">Initial Down Payment</h3>
//                                             <p className="text-gray-400 mb-4">Begin your journey with a 20% upfront payment</p>
//                                             <div className="p-4 rounded-2xl shadow-md border-2" style={{
//                                                 backgroundColor: '#252938',
//                                                 borderColor: '#FAECC9'
//                                             }}>
//                                                 <div className="text-xl font-medium" style={{ color: '#CCAB64' }}>{formatCurrency(plan.downPayment)}</div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Step 2 */}
//                                     <div className="flex gap-6">
//                                         <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-black font-medium text-lg shadow-lg" style={{
//                                             background: 'linear-gradient(135deg, #CCAB64 0%, #e6c888 100%)'

//                                         }}>
//                                             2
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="font-medium text-xl mb-2 flex items-center gap-2 text-white">
//                                                 Monthly Installments
//                                                 <Key className="w-5 h-5" />                                            </h3>
//                                             <p className="text-gray-400 mb-4">
//                                                 Pay {formatCurrency(plan.monthlyPayment)} monthly for {plan.monthsToKey} months until key handover
//                                             </p>
//                                             <div className="p-6 rounded-2xl shadow-md border-2" style={{
//                                                 backgroundColor: '#252938',
//                                                 borderColor: '#FAECC9'
//                                             }}>
//                                                 <div className="space-y-3">
//                                                     <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: '#FAECC9' }}>
//                                                         <span className="font-medium text-gray-400">Monthly Payment</span>
//                                                         <span className="font-medium text-xl text-white">{formatCurrency(plan.monthlyPayment)}</span>
//                                                     </div>
//                                                     <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: '#FAECC9' }}>
//                                                         <span className="font-medium text-gray-400">Number of Months</span>
//                                                         <span className="font-medium text-xl text-white">{plan.monthsToKey}</span>
//                                                     </div>
//                                                     <div className="flex justify-between items-center pt-2">
//                                                         <span className="font-semibold text-gray-300">Total by Key Handover</span>
//                                                         <span className="font-medium text-2xl" style={{ color: '#CCAB64' }}>{formatCurrency(plan.keyHandoverAt)}</span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Milestone */}
//                                     <div className="flex gap-6">
//                                         <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={{
//                                             background: 'linear-gradient(135deg, #CCAB64 0%, #FAECC9 100%)'
//                                         }}>
//                                             <Key className="w-6 h-6 !text-black" />
//                                         </div>
//                                         <div className="flex-1">
//                                             <div className="p-6 rounded-2xl shadow-lg border-2" style={{
//                                                 background: 'linear-gradient(135deg, #FAECC9 0%, #fff5e1 100%)',
//                                                 borderColor: '#CCAB64'
//                                             }}>
//                                                 <h3 className="font-bold text-xl mb-2" style={{ color: '#252938' }}>🎉 Key Handover Milestone</h3>
//                                                 <p className="font-medium" style={{ color: '#252938' }}>
//                                                     Receive your property keys after paying {formatCurrency(plan.keyHandoverAt)} (56% of total value)
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Step 3 */}
//                                     <div className="flex gap-6">
//                                         <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{
//                                             backgroundColor: '#252938'
//                                         }}>
//                                             3
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="font-bold text-xl mb-2 text-white">Continue Payments</h3>
//                                             <p className="text-gray-400 mb-4">
//                                                 Keep paying {formatCurrency(plan.monthlyPayment)} monthly for {plan.monthsAfterKey} more months
//                                             </p>
//                                             <div className="p-6 rounded-2xl shadow-md border-2" style={{
//                                                 backgroundColor: '#252938',
//                                                 borderColor: '#FAECC9'
//                                             }}>
//                                                 <div className="flex justify-between items-center mb-3">
//                                                     <span className="font-medium text-gray-400">Monthly Payment</span>
//                                                     <span className="font-bold text-xl text-white">{formatCurrency(plan.monthlyPayment)}</span>
//                                                 </div>
//                                                 <div className="flex justify-between items-center">
//                                                     <span className="font-medium text-gray-400">Remaining Months</span>
//                                                     <span className="font-bold text-xl text-white">{plan.monthsAfterKey}</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Final Step */}
//                                     <div className="flex gap-6">
//                                         <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={{
//                                             background: 'linear-gradient(135deg, #CCAB64 0%, #e6c888 100%)'
//                                         }}>
//                                             <CheckCircle className="w-6 h-6 !text-black" />
//                                         </div>
//                                         <div className="flex-1">
//                                             <div className="p-6 rounded-2xl shadow-lg border-2 border-white" style={{
//                                             }}>
//                                                 <h3 className="font-bold text-xl mb-2 text-white drop-shadow flex items-center gap-2">                            <Home className="w-8 h-8 text-white" />
//                                                     Complete Ownership</h3>
//                                                 <p className="font-medium text-white/95">
//                                                     After {plan.totalMonths} months, you own the property outright!
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Final Summary */}
//                             <div className="rounded-3xl p-8 shadow-2xl text-white" style={{
//                                 backgroundColor: '#252938'
//                             }}>
//                                 <h3 className="text-2xl font-bold mb-6">Complete Payment Summary</h3>
//                                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                                     <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(204, 171, 100, 0.15)' }}>
//                                         <div className="text-sm text-white mb-1">Property Value</div>
//                                         <div className="font-medium text-2xl text-white" >{formatCurrency(plan.unitValue)}</div>
//                                     </div>
//                                     <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(204, 171, 100, 0.15)' }}>
//                                         <div className="text-sm text-white mb-1">Total Duration</div>
//                                         <div className="font-medium text-2xl text-white" >{plan.totalMonths} Months</div>
//                                     </div>
//                                     <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(204, 171, 100, 0.15)' }}>
//                                         <div className="text-sm text-white mb-1">Key at Month</div>
//                                         <div className="font-medium text-2xl text-white" >{plan.monthsToKey}</div>
//                                     </div>
//                                     <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(204, 171, 100, 0.15)' }}>
//                                         <div className="text-sm text-white mb-1">Monthly</div>
//                                         <div className="font-medium text-2xl text-white" >{formatCurrency(plan.monthlyPayment)}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState } from "react";
import { Home, Key, CheckCircle, TrendingUp } from "lucide-react";

export default function MortgageCalculator() {
    const [unitValue, setUnitValue] = useState("");
    const [plan, setPlan] = useState(null);

    const calculatePlan = () => {
        const value = parseFloat(unitValue);
        if (!value || value <= 0) return;

        const downPayment = value * 0.2;
        const monthlyPayment = value * 0.01;
        const keyHandoverAt = value * 0.56;
        const monthsToKey = Math.ceil(
            (keyHandoverAt - downPayment) / monthlyPayment
        );
        const totalMonths = 80;

        setPlan({
            unitValue: value,
            downPayment,
            monthlyPayment,
            keyHandoverAt,
            monthsToKey,
            totalMonths,
            monthsAfterKey: totalMonths - monthsToKey,
        });
    };

    const formatCurrency = (amount) =>
        new Intl.NumberFormat("en-AE", {
            style: "currency",
            currency: "AED",
            maximumFractionDigits: 0,
        }).format(amount);

    const card =
        "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl";

    return (
        <div className="px-4 py-10 bg-[#1a1d2e]  text-white">
            {/* Header */}
            <div className="max-w-3xl mx-auto mb-10 flex items-start  md:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#CCAB64] to-[#FAECC9]">
                    <Home className="text-black w-7 h-7" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">Investment Calculator</h1>
                    <p className="text-gray-400 text-sm">
                        Plan your property investment journey
                    </p>
                </div>
            </div>

            {/* Main Card */}
            <div className={`max-w-4xl mx-auto p-4 md:p-8 ${card}`}>
                {/* Input */}
                <div className="mb-10">
                    <label className="block text-sm font-medium mb-3 text-gray-300">
                        Property Value
                    </label>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                                AED
                            </span>
                            <input
                                type="number"
                                value={unitValue}
                                onChange={(e) => setUnitValue(e.target.value)}
                                placeholder="1,000,000"
                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10
                           focus:ring-2 focus:ring-[#CCAB64]/50 focus:border-[#CCAB64]
                           outline-none transition text-white"
                            />
                        </div>

                        <button
                            onClick={calculatePlan}
                            disabled={!unitValue}
                            className="px-10 py-4 rounded-2xl font-medium !text-black
                         bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
                         hover:bg-[#CCAB64]hover:shadow-2xl transition
                         disabled:opacity-40 disabled:cursor-not-allowed
                         text-md"
                        >
                            Calculate Plan
                        </button>
                    </div>
                </div>

                {/* Results */}
                {plan && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* Summary */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                {
                                    label: "Down Payment",
                                    value: formatCurrency(plan.downPayment),
                                    hint: "20% upfront",
                                },
                                {
                                    label: "Monthly Payment",
                                    value: formatCurrency(plan.monthlyPayment),
                                    hint: "1% monthly",
                                },
                                {
                                    label: "Total Duration",
                                    value: `${plan.totalMonths} Months`,
                                    hint: "Full plan",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className={`${card} p-6 hover:scale-[1.02] transition`}
                                >
                                    <div className="text-xs text-gray-400 uppercase mb-1">
                                        {item.label}
                                    </div>
                                    <div className="text-2xl font-semibold">{item.value}</div>
                                    <div className="text-xs text-gray-500 mt-2">{item.hint}</div>
                                </div>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className={`${card} p-8`}>
                            <h2 className="text-xl font-semibold flex items-center gap-3 mb-8">
                                <TrendingUp className="text-[#CCAB64]" />
                                Payment Journey
                            </h2>

                            <div className="relative md:pl-8 space-y-10">
                                {/* <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#CCAB64] to-transparent" /> */}

                                {/* Step 1 */}
                                <Step
                                    title="Down Payment"
                                    description="Pay 20% upfront to begin"
                                    value={formatCurrency(plan.downPayment)}
                                    className="md:flex hidden"
                                />

                                {/* Step 2 */}
                                <Step
                                    title="Monthly Payments"
                                    description={`Pay ${formatCurrency(
                                        plan.monthlyPayment
                                    )} for ${plan.monthsToKey} months`}
                                    className="md:flex hidden"
                                    // value={`Total: ${formatCurrency(plan.keyHandoverAt)}`}
                                    icon={<Key className="w-5 h-5  !text-black" />}
                                />

                                {/* Key Handover */}
                                <div className="p-5 md:p-8 rounded-3xl bg-gradient-to-br from-[#FAECC9] to-white border-2 border-[#CCAB64] shadow-2xl">
                                    <h3 className="text-2xl font-semibold text-[#252938] mb-2">
                                        <div className="flex items-center gap-2">   <Key className="w-6 h-6 !text-[#CCAB64]" /> Key Handover

                                        </div> </h3>
                                    <p className="text-[#252938]/80 leading-relaxed">
                                        Receive your property keys once you’ve paid{" "}
                                        <span className="font-semibold text-[#252938]">56%</span>{" "}
                                        of the total value —
                                        <span className="font-semibold text-[#CCAB64] ml-1">
                                            {formatCurrency(plan.keyHandoverAt)}
                                        </span>
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <Step
                                    title="Remaining Payments"
                                    description={`${plan.monthsAfterKey} months after handover`}
                                    value={formatCurrency(plan.monthlyPayment * 44)}
                                    className="md:flex hidden"
                                />

                                {/* Final */}
                                <div className={`${card} p-6 flex items-center gap-4`}>
                                    <CheckCircle className="text-[#CCAB64]" />
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Complete Ownership
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            Own the property after {plan.totalMonths} months
                                        </p>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <Step
                                    title="Guaranteed Rental Income (Annual)"
                                    value={formatCurrency(plan.monthlyPayment * 12 * 0.8)}
                                    className="md:flex hidden"
                                />
                            </div>
                        </div>

                        {/* Dashboard Summary */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                ["Property Value", plan.unitValue],
                                ["Duration", `${plan.totalMonths} Months`],
                                ["Key Handover", `${plan.monthsToKey} Months`],
                                ["Monthly", plan.monthlyPayment],
                                ["Guaranteed Rental Income (Annual)", plan.monthlyPayment],
                            ].map(([label, value], index, array) => {
                                const isLast = index === array.length - 1;
                                const isKeyMonth = label === "Key Handover";

                                let displayValue;

                                if (typeof value === "number") {
                                    if (isKeyMonth) {
                                        displayValue = value; //  no currency
                                    } else {
                                        displayValue = formatCurrency(isLast ? value * 12 * 0.8 : value);
                                    }
                                } else {
                                    displayValue = value;
                                }

                                return (
                                    <div
                                        key={label}
                                        className={`${card} p-5 text-center hover:bg-white/10 transition`}
                                    >
                                        <div className="text-xs text-gray-400 mb-1">{label}</div>
                                        <div className="text-sm md:text-xl font-semibold">
                                            {displayValue}
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

function Step({ title, description, value, icon, className }) {
    return (
        <div className={`relative flex gap-6 `}>
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CCAB64] to-[#FAECC9] flex items-center justify-center text-black font-bold  ${className}`}>
                {icon || "✓"}
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-gray-400 text-sm mb-2">{description}</p>
                <div className="text-[#CCAB64] font-semibold">{value}</div>
            </div>
        </div>
    );
}
