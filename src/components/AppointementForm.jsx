import React from "react";
import TopSection from "./TopSection";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "./Form/DatePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import MyInput from "./Form/MyInput";
import MySelect from "./Form/MySelect";

export default function AppointementForm() {
  const extras = [
    "Interior Oven: $50",
    "Interior Fridge: $50",
    "Interior/Exterior Cabinets: $65",
    "Wall Spot Wipe-Down: $10/room",
    "Blind(s) Wipe-Down: $10 each",
    "Interior Windows + Tracks: $10 each",
    "Steam Mopping: Price Varies",
  ];
  const parking = [
    "Free neighborhood parking",
    "Parking meters",
    "Building garage access",
    "Gated community access",
  ];
  const serviceTypes = [
    "Standard Cleaning",
    "Deep Cleaning",
    "Move-in/out Cleaning",
    "Airbnb Cleaning",
  ];
  const times = ["One time", "Weekly", "Bi-Weekly", "Monthly"];
  const bedrooms = [
    "Studio",
    "1",
    "2",
    "3",
    "4",
    "5",
    "I have more than 5 bedrooms",
  ];
  const bathrooms = ["1", "2", "3", "4", "5", "I have more than 5 bathrooms"];
  const rooms = ["1", "2", "+3"];
  const lasttimecleaned = [
    "0 - 6 weeks",
    "1 - 3 months",
    "2 - 5 months",
    "More than 6 months",
    "More than 1 year ago",
  ];
  const pets = ["None", "1", "2", "+3"];
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <TopSection
          subtitle="Make an appointement"
          title="Let us take care of your home"
          intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laborum assumenda? Consequatur, consequuntur ipsam! Sequi maiores tenetur doloremque totam et?"
        />
        <form className="w-full lg:w-4/5 mx-auto flex flex-col gap-y-6 px-6 py-10 border border-steel-blue rounded-lg shadow-2xl">
          <div className={"flex flex-col lg:flex-row gap-6 lg:gap-4"}>
            <div className={"w-full lg:w-1/2"}>
              <MyInput
                label="First Name"
                placeholder="Your first name"
                type="text"
                id="firstname"
              />
            </div>
            <div className={"w-full lg:w-1/2"}>
              <MyInput
                label="Last Name"
                placeholder="Your last name"
                type="text"
                id="lastname"
              />
            </div>
          </div>
          <div className={"flex flex-col lg:flex-row gap-6 lg:gap-4"}>
            <div className={"w-full lg:w-1/2"}>
              <MyInput
                label="Email"
                placeholder="Your address mail"
                type="email"
                id="email"
              />
            </div>
            <div className={"w-full lg:w-1/2"}>
              <MyInput
                label="Phone"
                placeholder="Your phone number"
                type="tel"
                id="phone"
              />
            </div>
          </div>
          <div className={"flex flex-col lg:flex-row gap-6 lg:gap-4"}>
            <div className={"w-full lg:w-1/2"}>
              <MySelect
                label="Preferable type of service"
                placeholder="Select your preferable type"
                items={serviceTypes}
              />
            </div>
            <div className={"w-full lg:w-1/2"}>
              <MySelect
                label="How often you would like this service ?"
                placeholder="Select your preferable time"
                items={times}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="address" className={"text-steel-blue font-bold"}>
              Home Address
            </Label>
            <Textarea
              placeholder={"Street Address"}
              className="focus-visible:ring-offset-1 focus-visible:ring-offset-transparent focus-visible:ring-rose-bonbon focus-visible:ring-1 focus-visible:placeholder:text-rose-bonbon mt-1"
            />
          </div>
          <div>
            <MyInput
              label="City / State / Zip"
              placeholder="City / State / Zip"
              type="text"
              id="city"
            />
          </div>
          <div className={"flex flex-col lg:flex-row gap-6 lg:gap-4"}>
            <div className={"w-full lg:w-1/2"}>
              <MySelect
                label="Bedrooms"
                placeholder="Select number of your bedrooms"
                items={bedrooms}
              />
            </div>
            <div className={"w-full lg:w-1/2"}>
              <MySelect
                label="Bathrooms"
                placeholder="Select number of your bathrooms"
                items={bathrooms}
              />
            </div>
          </div>
          <div className={"flex flex-col lg:flex-row gap-6 lg:gap-4"}>
            <div className={"w-full lg:w-1/2"}>
              <MySelect
                label="Any additional rooms ( family, room offices, ect)"
                placeholder="Select number of your rooms"
                items={rooms}
              />
            </div>
            <div className={"w-full lg:w-1/2"}>
              <MyInput
                label="Approximate square footage"
                placeholder="Approximate square footage"
                type="text"
                id="squarefootage"
              />
            </div>
          </div>
          <div className={"flex flex-col gap-2"}>
            <Label htmlFor="date" className={"text-steel-blue font-bold"}>
              When would you like us to come ?
            </Label>
            <DatePicker id="date" />
          </div>
          <div>
            <Label className={"text-steel-blue font-bold"}>
              Extras add-ons :
            </Label>
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1"}>
              {extras.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={item} />
                  <label htmlFor={item} className="parag select-none text-sm">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <MyInput
              label="Interior Windows"
              placeholder="How many windows would like us to clean ?"
              type="text"
              id="interior-windows"
            />
          </div>
          <div>
            <MyInput
              label="Dust / Wipe-Down blinds"
              placeholder="How many blinds do you need us to dust / wipe-down ?"
              type="text"
              id="blinds"
            />
          </div>
          <div>
            <MyInput
              label="Conditions"
              placeholder="Rate your place (1-tidy, 10-needs a lot of work)"
              type="text"
              id="Conditions"
            />
          </div>
          <div>
            <MySelect
              label="When is the last time your home has been professionally cleaned ?"
              placeholder="Select the time"
              items={lasttimecleaned}
            />
          </div>
          <div>
            <MySelect
              label="Do you have pets that shed ?"
              placeholder="Select number of your pets"
              items={pets}
            />
          </div>
          <div>
            <Label className={"text-steel-blue font-bold"}>
              Parking information
            </Label>
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1"}>
              {parking.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={item} />
                  <label htmlFor={item} className="parag select-none text-sm">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="address" className={"text-steel-blue font-bold"}>
              What else should we know ?
            </Label>
            <Textarea
              placeholder={"Garage Code, Lockbox, etc."}
              className="focus-visible:ring-offset-1 focus-visible:ring-offset-transparent focus-visible:ring-rose-bonbon focus-visible:ring-1 focus-visible:placeholder:text-rose-bonbon mt-1"
            />
          </div>
          <div>
            <Label htmlFor="address" className={"text-steel-blue font-bold"}>
              Text me all cool reminders / heads up
            </Label>
            <RadioGroup
              defaultValue="yesnotif"
              className={"grid grid-cols-2 gap-1 mt-1"}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yesnotif" id="yesnotif" />
                <Label htmlFor="yesnotif" className={"parag"}>
                  Yeah !
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nonotif" id="nonotif" />
                <Label htmlFor="nonotif" className={"parag"}>
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>
          <button type="submit" className={"second-btn"}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
