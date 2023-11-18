import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-4 m-4">
      <h1 className="font-bold text-lg">{title}</h1>
      {isVisible === title ? (
        <div>
          {" "}
          <p onClick={() => setIsVisible(" ")}>Hide</p>
          <p>{desc}</p>
        </div>
      ) : (
        <p onClick={() => setIsVisible(title)}>Show</p>
      )}
    </div>
  );
};
const InstaMart = () => {
  const [isVisible, setIsVisible] = useState("About");
  return (
    <div>
      <Section title={"About"} desc={"description of about"} isVisible={isVisible} setIsVisible={setIsVisible}></Section>
      <Section title={"Team"} desc={"description of Team"} isVisible={isVisible} setIsVisible={setIsVisible}></Section>
      <Section title={"Carrers"}desc={"description of Carrers"} isVisible={isVisible}setIsVisible={setIsVisible}></Section>
    </div>
  );
};
export default InstaMart;
