export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono
     md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}
