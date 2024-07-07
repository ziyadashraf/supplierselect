'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Form() {

    const sheetNames = {
        Basketball: ["Professional Wheelchairs", "Beginner Wheelchairs", "Professional Ball", "Beginner Ball"],
        Boccia: ["Deluxe Ramp", "Akizaki Ramp", "Transportation Box", "Head Pointer", "Mouth Pointer", "Hand Pointer", "Wrist Pointer", "Ball Holder"],
        "Para Powerlifting": ["T-Shaped Plates 20kg", "T-Shaped Plates 15kg", "T-Shaped Plates 10kg", "Iron Plates 20kg", "Iron Plates 15kg", "Iron Plates 10kg", "Technogym Plates 20kg", "Technogym Plates 15kg", "Technogym Plates 10kg", "Local Bar", "Imported Bar", "Bar Lock", "Vertical Plates Holder", "Flat Bench"],
        Volleyball: ["Volleyball Chair"],
        Other: ["US Sensor", "Fencing Suit L", "Fencing Suit M", "Olympic Hand Bow"]
    };
    // const [agreed, setAgreed] = useState(false)
    const [sportName, setSportName] = useState("");
    const [sheetName, setSheetName] = useState("");
    const [totalCostWeight, setTotalCostWeight] = useState("");
    const [efficiencyWeight, setEfficiencyWeight] = useState("");
    const [timeWeight, setTimeWeight] = useState("");
    const [availableSheets, setAvailableSheets] = useState([]);
    const [response, setResponse] = useState(null);

    const handleSportNameChange = (event) => {
        const selectedSport = event.target.value;
        setSportName(selectedSport);
        setAvailableSheets(sheetNames[selectedSport] || []);
        setSheetName(""); // Reset the sheet name when sport name changes
    };

    const handleSheetNameChange = (event) => {
        setSheetName(event.target.value);
    };


    // const handleSportNameChange = (event) => {
    //     setSportName(event.target.value);
    // };

    // const handleSheetNameChange = (event) => {
    //     setSheetName(event.target.value);
    // };

    const handleTotalCostWeightChange = (event) => {
        setTotalCostWeight(event.target.value);
    };

    const handleEfficiencyWeightChange = (event) => {
        setEfficiencyWeight(event.target.value);
    };

    const handleTimeWeightChange = (event) => {
        setTimeWeight(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const data = {
        //     filePath,
        //     sheetName,
        //     totalCostWeight,
        //     efficiencyWeight,
        //     timeWeight
        // };


        try {
            const response = await fetch('http://127.0.0.1:5000/api/get-optimization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    "sportName": sportName,
                    "sheetName": sheetName,
                    "weightCost": totalCostWeight,
                    "weightEfficiency": efficiencyWeight,
                    "weightTime": timeWeight

                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            setResponse(result);

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };


    return (
        <div >
            {/* <div>Ziyad</div> */}
            <div className="px-6 py-10 sm:py-24 lg:px-8">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SUPPLIER SELECTION</h2>
                    {/* <p className="mt-2 text-lg leading-8 text-gray-600">
                        Aute magna irure deserunt veniam aliqua magna enim voluptate.
                    </p> */}
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                        <div className="sm:col-span-2">
                            <label htmlFor="sportName" className="block text-sm font-semibold leading-6 text-gray-900">
                                Enter Sport Name:
                            </label>
                            <div className="mt-2.5">
                                <select
                                    name="sportName"
                                    id="sportName"
                                    value={sportName}
                                    onChange={handleSportNameChange}
                                    autoComplete="organization"
                                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${sportName === "" ? "text-gray-400" : "text-gray-900"}`}
                                >
                                    <option value="" disabled hidden className="text-gray-400"></option>
                                    <option value="Basketball">Basketball</option>
                                    <option value="Boccia">Boccia</option>
                                    <option value="Para Powerlifting">Para Powerlifting</option>
                                    <option value="Volleyball">Volleyball</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="sheetName" className="block text-sm font-semibold leading-6 text-gray-900">
                                Enter Sheet Name:
                            </label>
                            <div className="mt-2.5">
                                <select
                                    name="sheetName"
                                    id="sheetName"
                                    value={sheetName}
                                    onChange={handleSheetNameChange}
                                    autoComplete="organization"
                                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${sheetName === "" ? "text-gray-400" : "text-gray-900"}`}
                                >
                                    <option value="" disabled hidden className="text-gray-400"></option>
                                    {availableSheets.map((sheet, index) => (
                                        <option key={index} value={sheet}>
                                            {sheet}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold leading-6 text-gray-900">
                                Total Cost Objective Weight:
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    value={totalCostWeight}
                                    onChange={handleTotalCostWeightChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold leading-6 text-gray-900">
                                Efficiency Objective Weight:
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    value={efficiencyWeight}
                                    onChange={handleEfficiencyWeightChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">
                                Time Objective Weight:
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    value={timeWeight}
                                    onChange={handleTimeWeightChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="text-lg bold flex flex-col">
                            {response && (
                                <>
                                    <div><span>Selected Supplier:</span> <span className="font-bold">{response.selectedSuppliers.join(", ")}</span></div>
                                    <div><span>Total Cost:</span> <span className="font-bold">{response.totalCost}</span></div>
                                    <div><span>Total Efficiency:</span> <span className="font-bold">{response.totalEfficiency}</span></div>
                                    <div><span>Total Time:</span> <span className="font-bold">{response.totalTime}</span></div>
                                </>
                            )}

                        </div>
                    </div>
                    <div className="mt-10 flex flex-row">
                        <button
                            type="submit"
                            className="block w-4/5 rounded-md bg-[#428C90] mr-2 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#59A5AA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#428C90]"
                            onClick={handleSubmit}
                        >
                            Calculate
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setSportName("");
                                setSheetName("");
                                setTotalCostWeight("");
                                setEfficiencyWeight("");
                                setTimeWeight("");
                                setResponse("")
                            }}
                            className="block w-1/5 rounded-md bg-none ml-2 px-3.5 py-2.5 text-center text-sm font-semibold text-[#428C90] hover:underline hover:bg-[#FFF2E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#428C90]"
                        >
                            Reset
                        </button>
                    </div>

                </form>
            </div>
        </div >
    )
}