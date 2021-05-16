export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-6xl pt-16 font-mono
     md:leading-none mb-12 text-center ">
      {children}
    </h1>
  )
}
