
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <img src="/images/loading.gif" alt="" width={50} height={50} />
    </div>
  );
}