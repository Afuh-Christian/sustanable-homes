import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { products } from '../../Pages/AboutUsPage';
import { NavLink } from 'react-router-dom';

export const IsActionEvaluate = ({ isActive }) => (isActive ? 'text-blue-700' : 'text-gray-800"')

export default function HeaderComponent() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-blue-700 text-white text-sm flex justify-between items-center px-4 py-2 md:px-8">
        <span>{"Designated supplier of the world's top 500 smart houses"}</span>
        <div className="flex items-center gap-4">
          <a href="mailto:info@volferda.com" className="flex items-center gap-1 hover:underline">
            <Mail size={16} /> info@volferda.com
          </a>
          <a href="tel:+8618566028140" className="flex items-center gap-1 hover:underline">
            <Phone size={16} /> +86-18566028140
          </a>
        </div>
      </div>
      <nav className="flex justify-between items-center px-4 py-4 md:px-8  font-semibold">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Volferda Logo" className="h-10" />
          <span className="text-xl font-semibold">VOLFERDA</span>
          <span className="text-sm text-gray-600">SMART HOUSE INDUSTRY LEADER</span>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-800">
            {[{to : "/" , page : "HOME" } , {to: "about" , page:"ABOUT US"}]
            .map(e => (
              <li key={e} className="hover:text-blue-700 cursor-pointer">
  <NavLink
    to={e.to}
    className={(isActive) => IsActionEvaluate(isActive)}
  >
    {e.page}
  </NavLink>
</li>
            ))}
        
          <li
            className="relative hover:text-blue-700 cursor-pointer"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <div className="flex items-center gap-1">
              
            <NavLink
    to="products"
    className={(isActive) => IsActionEvaluate(isActive)}
  >
 PRODUCTS 
 {/* <ChevronDown size={16} /> */}
  </NavLink>


            </div>
            {isProductsOpen && (
              <ul className="absolute top-full w-36 left-0 bg-white shadow-lg p-2 rounded-md">
                {products.map((subItem) => (
                  <li key={subItem} className="p-2 text-gray-800 hover:text-blue-700 hover:bg-gray-100">
                    
                   
                    <NavLink
    to={subItem.to}
    className={(isActive) => IsActionEvaluate(isActive)}
  >
    {subItem.name}
  </NavLink>
                    
                    
                    
                    </li>
                ))}
              </ul>
            )}
          </li>
          {[
          {to: "video" , page:"VIDEO"},
          {to: "blog" , page:"BLOG"},
          {to: "factory" , page:"FACTORY"},
          {to: "faq" , page:"FAQ"},
          {to: "contact" , page:"CONTACT"},
        ]
            .map(e => (
            <li key={e} className="hover:text-blue-700 cursor-pointer">
  <NavLink
    to={e.to}
    className={(isActive) => IsActionEvaluate(isActive)}
  >
    {e.page}
  </NavLink>
</li>
            ))}
        
        </ul>
      </nav>
    </header>
  );
}
