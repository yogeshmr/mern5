// frontend/src/pages/ReqsPage.jsx
import React from 'react';

const FilterSection = ({ title, children }) => (
    <div className="border p-4 w-64 h-80 overflow-y-auto">
        <h2 className="font-bold mb-2">{title}</h2>
        {children}
    </div>
);

const ReqsPage = () => {
    return (
        <div className="flex overflow-x-auto h-1/2">
            <div className="flex-shrink-0">
                <FilterSection title="Region">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["Africa", "Asia", "Australia", "Canada", "China", "Europe","France", "Germany", "India","Middle East", "North America", "Russia", "South America","South East Asia", "UK", "US"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
            {/* Add the rest of your FilterSection components here */}
            <div className="flex-shrink-0">
                <FilterSection title="Domain">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["Aerospace", "Automotive", "Commercial", "Industrial", "Medical" ,"Military", "Navy", "Oil", "Solar", "Space"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
            <div className="flex-shrink-0">
                <FilterSection title="Category">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["Cargo", "LMV", "Passenger", "Commercial", "Business", "Trainer", "Motorboart", "agricultural", "Off Road", "Cross-country", "Sports"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
            <div className="flex-shrink-0">
                <FilterSection title="Ambient Temperature">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["-55 to +150", "-55 to +125", "-40 to +125", "-40 to +85", "-20 to +85", "0 to +70", "0 to +50", "-10 to +70", "-10 to +50", "-20 to +50"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
            <div className="flex-shrink-0">
                <FilterSection title="Altitude">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["Seal level", "100m", "500m", "1000m", "5000m", "10000m", "15000m", "20000m", "25000m", "30000m", "35000m", "40000m", "45000m"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
            <div className="flex-shrink-0">
                <FilterSection title="Mechanical Shock">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["1G", "10G", "50G", "10G", "50G", "10G", "50G", "10G", "50G", "10G", "50G", "10G", "50G", "10G", "50G", "10G", "50G", "10G", "50G"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
            <div className="flex-shrink-0">
                <FilterSection title="Humidity">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["10%RH", "20%RH", "30%RH", "40%RH", "50%RH", "60%RH", "70%RH", "80%RH", "90%RH", "100%RH"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
            <div className="flex-shrink-0">
                <FilterSection title="Vibration">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["1G", "2G", "3G", "4G", "5G", "6G", "7G", "8G", "9G", "10G", "11G", "12G", "13G", "14G", "15G", "16G", "17G", "18G", "19G", "20G"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
            <div className="flex-shrink-0">
                <FilterSection title="MTBF">
                    <input type="text" placeholder="Search Filter" className="border p-2 w-full mb-2" />
                    <div>
                        {["1000 hours", "2000 hours", "3000 hours", "4000 hours", "5000 hours", "6000 hours", "7000 hours", "8000 hours", "9000 hours", "10000 hours", "11000 hours", "12000 hours", "13000 hours", "14000 hours", "15000 hours", "16000 hours", "17000 hours", "18000 hours", "19000 hours"].map((item, index) => (
                            <div key={index} className="mb-1">{item}</div>
                        ))}
                    </div>
                </FilterSection>
            </div>
        </div>
    );
};

export default ReqsPage;