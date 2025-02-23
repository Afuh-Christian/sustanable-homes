export const ResponsiveTable = (name) => {
    return (
      <div className="overflow-x-auto p-4">
        <table className="min-w-full border border-gray-300 text-sm">
          <tbody>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 font-semibold">Product Name</td>
              <td className="border px-4 py-2">{name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Model</td>
              <td className="border px-4 py-2">Dome House</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 font-semibold">Size</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-4">
                  <li>Model φ3.0: φ: 3000mm, H:2450mm, Area:7.06m², People: 1-2</li>
                  <li>Model φ3.5: φ: 3500mm, H:2650mm, Area:9.62m², Bed & Breakfast for 1-2 People, Restaurant for 8-10 People</li>
                  <li>Model φ4.0: φ: 4000mm, H:2750mm, Area:11.56m², Bed & Breakfast for 1-2 People, Restaurant for 8-10 People</li>
                  <li>Model φ4.5: φ: 4500mm, H:2750mm, Area:15.9m², Bed & Breakfast for 1-2 People, Restaurant for 8-10 People</li>
                  <li>Model φ5.0: φ: 5000mm, H:2750mm, Area:19.62m², Bed & Breakfast for 1-2 People, Restaurant for 8-16 People</li>
                  <li>Model φ5.5: φ: 5500mm, H:3000mm, Area:23.75m², Bed & Breakfast for 1-2 People, Restaurant for 10-20 People</li>
                  <li>Model φ6.0: φ: 6000mm, H:3300mm, Area:28.26m², Bed & Breakfast for 1-2 People, Restaurant for 16-26 People</li>
                  <li>Model φ6.5: φ: 6500mm, H:3300mm, Area:33.16m², Bed & Breakfast for 2-4 People, Restaurant for 16-30 People</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Frame Material</td>
              <td className="border px-4 py-2">6063-T5 Aluminum profile (three colors optional)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 font-semibold">Material of Wall</td>
              <td className="border px-4 py-2">PC board 3.0 mm thickness</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Gate System</td>
              <td className="border px-4 py-2">Flat door (open outside)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 font-semibold">Wind Load</td>
              <td className="border px-4 py-2">100 km/h (0.5KN/m²)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Interior Floor (Optional)</td>
              <td className="border px-4 py-2">100mm height, Aluminum circle beam, aluminum keel, 18 mm solid wood Laminated, PVC surface locking floor</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 font-semibold">Intelligent Lighting System</td>
              <td className="border px-4 py-2">LED main light source (remote control adjustable) standard</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Optional Accessories</td>
              <td className="border px-4 py-2">Indoor floor, Curtain, Dimmer skylight, Electric lifting skylight, Fresh air ventilator, Outdoor LED ambient light, Air to air conditioning, Electric intelligent moving door, Waterproof outdoor smart lock, Aluminum base</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 font-semibold">Usage Scenarios</td>
              <td className="border px-4 py-2">Various campsites in scenic spots, Garden View, Spa Resort, Water Park Lounge, Rest Leisure Travel Holiday, Internet celebrity Homestay, Specialty Restaurant, Villa Sun Room, Gym, Chess tea room, etc.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  