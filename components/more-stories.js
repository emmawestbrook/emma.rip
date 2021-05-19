import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h1 className="text-5xl md:text-7xl font-tactile my-16 text-center md:text-left">
        some thots :•)
             </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-8 lg:gap-x-8 gap-y-16 mb-32 ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
