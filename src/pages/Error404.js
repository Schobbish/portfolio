import "../App.css";

export default function Error404() {
    return (
        <div className="App" class="p-10">
            <h1 class="text-5xl font-semibold pb-5">404 error</h1>
            <p class="pb-2">
                This is a 404 error page
            </p>
            <p>
                <a class="text-blue-800 underline" href="/">Return home</a>.
            </p>
        </div>
    )
}
