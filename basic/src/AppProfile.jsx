import "./App.css";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨!");
  };

  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Profile
        image="/img/jjangGu.jpeg"
        name="신짱구"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile image="/img/pengsoo.jpeg" name="펭 수" title="백엔드 개발자" />
      <Profile image="/img/rupy.png" name="루 피" title="요리사" />
    </>
  );
}

export default AppProfile;
