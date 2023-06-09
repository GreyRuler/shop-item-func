import Button from './Button';

const ShopItemFunc = (props) => {
	const {item} = props
	return (
		<div className="main-content">
			<h2>{item.brand}</h2>
			<h1>{item.title}</h1>
			<h3>{item.description}</h3>
			<div className="description">{item.descriptionFull}</div>
			<div className="highlight-window mobile">
				<div className="highlight-overlay"></div>
			</div>
			<div className="divider"></div>
			<div className="purchase-info">
				<div className="price">{item.currency}{item.price}.00</div>
				<Button/>
			</div>
		</div>
	)
}

export default ShopItemFunc
