const BranchProducts = ({ products }: { products: any }) => {
  console.log(products);
  return (
    <div className="">
      <p className="fs-4 fw-bold text-muted">Products</p>
      <div className="mt-4 d-flex flex-wrap gap-4">
        {/* {moderators?.map((moderator, key) => {
          return <ModeratorCard key={key} moderator={moderator} />;
        })} */}
      </div>
    </div>
  );
};

export default BranchProducts;
