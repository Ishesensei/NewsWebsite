'use client';
export default function FilterError({ error }) {
  return (
    <>
      <h2>Error Occured</h2>
      <p>{error.message}</p>
    </>
  );
}
