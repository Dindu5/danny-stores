import Skeleton from "react-loading-skeleton";

function ProductSkeleton() {
  return (
    <div className="col-md-4 all des">
      <div className="product-item">
        <Skeleton height={250} />
        <div className="down-content">
          <Skeleton height={30} />
          <Skeleton height={30} />
          <Skeleton height={50} />
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
