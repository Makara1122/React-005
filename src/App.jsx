import { CardComponent } from "./components/CardComponent";
import { NavbarComponent } from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import { ProfileComponent } from "./components/ProfileComponent";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="flex flex-col justify-between items-center h-screen w-full ">
      <div className="my-10 w-[500px] ">
      <FormComponent />
      </div>
      <div className="text-2xl uppercase text-green-500">Get all Products with validation in visual Dom</div>
      <NavbarComponent />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 bg-gray-100 ">
        <CardComponent />
      </div>
      <FooterComponent />
      <div className="text-2xl uppercase text-yellow-500">
        Passing Props to child components
      </div>

      <ProfileComponent
        //  passing props to profile
        name="Torn Sievla"
        image="https://scontent.fpnh18-3.fna.fbcdn.net/v/t39.30808-6/335434545_3856132587946290_2228282775025105113_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG21GIFHkKNvYNy0sNpxxfnHAi3OdAAGkkcCLc50AAaSftZSzOZ7pEGqodD4s_QJt5_4fSNItbDL4jkyaQQqdFW&_nc_ohc=O79QqnymfkEAX9Py6AV&_nc_zt=23&_nc_ht=scontent.fpnh18-3.fna&oh=00_AfA76wmUPFw2IloiRg5iDrMydfcIAdVqbI8MXmhpLQsZgg&oe=65F8C5EC"
        description="Respect and Funny Guy"
      />
    </div>
  );
}
export default App;
