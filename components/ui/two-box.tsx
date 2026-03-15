export default function TwoBox({videoUrl, title, description, alt = true, ctaHref, theme = "light"}:{videoUrl:string, title: string, description: string, alt?: boolean, ctaHref?: string, theme?: "light" | "dark"} ) {
    const isDark = theme === "dark"
    return (
        <article className={`grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
            isDark
                ? "bg-secondary-dark ring-1 ring-white/5 hover:shadow-xl hover:shadow-black/20"
                : "bg-white shadow-sm hover:shadow-xl"
        }`}>
            <div className={
                `${alt ? "lg:order-2" : "lg:order-1" }
                ${isDark ? "bg-surface-dark-card" : "bg-stone-100"} p-8 flex items-center justify-center lg:aspect-square`}>
                <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    {/* Browser chrome bar */}
                    <div className={`h-8 flex items-center px-3 gap-1.5 ${isDark ? "bg-white/5" : "bg-stone-200"}`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-white/20" : "bg-stone-400/50"}`} />
                        <div className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-white/20" : "bg-stone-400/50"}`} />
                        <div className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-white/20" : "bg-stone-400/50"}`} />
                    </div>
                    <video className="block w-full" autoPlay muted loop playsInline>
                        <source src={videoUrl} type={videoUrl.endsWith(".mov") ? "video/quicktime" : "video/mp4"} />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="flex justify-center flex-col gap-5 w-full h-full p-8 sm:p-12 lg:p-16 xl:p-20">
                <h3 className={`text-2xl md:text-3xl font-serif font-normal tracking-[0.05em] ${isDark ? "text-white" : "text-stone-900"}`}>{title}</h3>
                <p className={`leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>{description}</p>
                {ctaHref && (
                    <a href={ctaHref} className={`text-sm font-medium underline underline-offset-4 transition-all duration-300 ${isDark ? "text-white/80 hover:text-white" : "text-stone-900 hover:text-stone-600"}`}>
                        See how it works &rarr;
                    </a>
                )}
            </div>
        </article>
    )
}
