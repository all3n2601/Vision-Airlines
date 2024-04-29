import React from 'react';
import { Disclosure } from '@headlessui/react';
import { GoChevronDown ,GoChevronUp} from "react-icons/go";
const visaTypes = [
  {
    name: 'e-Visa',
    details: [
      'Eligibility: Available for recreation, sightseeing, casual visits, short-term yoga programmes, medical treatment including Indian medicine, and business purposes.',
      'Procedure: Apply online up to 120 days before the expected arrival date.',
      'Sub-categories: e-Tourist, e-Business, e-Medical.',
      'Entry Points: Designated airports and seaports.',
      'Validity: Up to 60 days with double or triple entries, depending on visa type.',
      'Fee: Variable, based on nationality.',
      '4 Entry points Persons holding e-Visa are allowed to enter into India only through the designated international airports namely, (1) Delhi (2) Mumbai (3) Chennai (4) Kolkata (5) Trivandrum (6) Bangalore (7) Hyderabad (8) Cochin (9) Goa (10) Ahmedabad (11) Amritsar (12) Gaya (13) Jaipur (14) Lucknow (15) Trichy (16) Varanasi (17) Calicut (18) Mangalore (19) Pune (20) Nagpur (21) Coimbatore (22) Bagdogra (23) Guwahati , (24) Chandigarh and (25) Visakhapatnam. Further, e-visa facility is also provided for entry at 5 major Indian seaports i.e. (1) Mumbai (2) Cochin (3) Mormugao (4) Chennai and (5) New Mangalore for cruise tourists. Persons holding e-Visa can depart from any of the authorized Immigration Check Posts in India.'
    ]
  },
  {
    name: 'Visa-on-Arrival',
    details: [
      'Eligibility: Available to Japanese nationals for business, tourism, conference, and medical purposes.',
      'Procedure: Apply at the visa counter upon arrival.',
      'Entry Points: Six designated international airports.',
      'Validity: Up to 60 days with double entry.',
      'Fee: ₹2000 or equivalent per passenger.'
    ]
  },
  {
    name: 'Transit Visa',
    details: [
      'Eligibility: For those transiting through India to reach another destination.',
      'Validity: Valid for a single journey and for entry within 15 days from the date of issue.',
      'Conditions: Direct transit for no more than 3 days.',
      'Fee: As per regulations.'
    ]
  },
  {
    name: 'Tourist Visa',
    details: [
      'Eligibility: For individuals intending to engage in recreation, sightseeing, or casual visits.',
      'Validity: Multiple entries for up to 10 years for some nationals, subject to restrictions.',
      'Fee: Based on nationality and visa type.',
      'Multiple entry Tourist Visa may be granted for a period of 10 years to the nationals of USA, Canada and Japan with a stipulation that “continuous stay during each visit shall not exceed 180 days and registration not required',
      'In respect of nationals of 30 countries i.e. (1) Iran, (2) Egypt, (3) Libya, (4) Qatar, (5) Iraq, (6) Syria, (7) Sudan, (8) Tunisia, (9) Kuwait, (10)Yemen, (11) Algeria, (12)Bahrain, (13) Turkey, (14) Morocco, (15) Kyrgyzstan, (16) Turkmenistan, (17) 4 Democratic People’s Republic of Korea (North Korea), (18) Lebanon, (19) Afghanistan, (20) Saudi Arabia, (21) Uganda, (22) Congo, (23) Ethiopia, (24) Nigeria, (25) Belarus, (26) Somalia, (27) South Sudan, (28) Kazakhstan, (29) Uzbekistan and (30) Sri Lanka, duration of visa will be decided by the concerned Indian Missions/ Posts subject to a maximum of 5 years with the stipulation “continous stay during each visit shall not exceed 90 days and registration not required'
    ]
  },
  // More visa types can be added here
];

function VisaInquiryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6" style={{ fontFamily: "Anta" }}>
      <h1 className="text-xl font-bold text-center mb-6">Visa Inquiry</h1>
      {visaTypes.map((visa, idx) => (
        <Disclosure key={idx}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                {visa.name}
                <span className="text-white">{open ? GoChevronDown : GoChevronUp}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                {visa.details.map((detail, index) => (
                  <p key={index} className="py-1">{detail}</p>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

export default VisaInquiryPage;
