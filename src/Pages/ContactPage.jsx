import { ContactComponent } from "../assets/components/ContactComponent";
import { CategoryComponent } from "./AboutUsPage";
import { ContactUsComponent } from "./BlogPage";

const ContactPage = () => {

  
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-8">
            {/* Products Section */}
                     <CategoryComponent />
                     <ContactUsComponent />
          </div>
  
          {/* Main Content */}
          <div className="md:col-span-3">
            {/* About Us Section */}
            <ContactComponent/>
          
           
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;