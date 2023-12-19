const EXJS = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry', 'Kiwi', 'Pineapple', 'Mango', 'Watermelon', 'Cherry'];
  fruits.push("Cranberry")
  const firstFruit = fruits[0];
  console.log(fruits)
  return ( 
    <>
      <div>Space to learn more JavaScript</div>
      <div>{firstFruit}</div>
    </>
   );
}
 
export default EXJS;