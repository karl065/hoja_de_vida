import './Item.scss';

function Item({item}) {
  return (
    <article>
      <img alt={item.alt} src={item.url} />
    </article>
  );
}

export default Item;
