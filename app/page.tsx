import "./home.css";
import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <MainPage serviceID={process.env.EMAILJS_SERVICE_ID!} templateID={process.env.EMAILJS_TEMPLATE_ID!} 
              userID={process.env.EMAILJS_USER_ID!} />
  );
}
