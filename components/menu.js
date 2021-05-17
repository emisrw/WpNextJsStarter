import Alert from "../components/alert";

export default function Menu({ menu }) {
  console.log(menu);
  return (
    <>
      <div className="min-h-screen">
        <ul>
          {menu.map((item) => {
            <li key={item.id}></li>;
          })}
        </ul>
      </div>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const menu = await getMainMenu();
  return {
    props: { menu },
  };
}
