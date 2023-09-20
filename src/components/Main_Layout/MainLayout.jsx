import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Dna } from "react-loader-spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-3">
        {navigation.state === "loading" ? (
          <div className="text-pink-700 h-[90vh] flex justify-center items-center">
            <Dna
              visible={true}
              height="300"
              width="300"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
