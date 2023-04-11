function Item({item}) {
  return (
    <article>
      <img className="mt-2 w-auto" alt={item.alt} src={item.url} />
    </article>
  );
}

export default Item;
