import "../App.css";

export default function Error404() {
    return (
        <div className="Error404 p-10">
            <h1 className="text-5xl font-semibold pb-5">404 error</h1>
            <p className="pb-2">
                This is a 404 error page
            </p>
            <p>
                <a className="text-blue-800 underline" href="/">Return home</a>.
            </p>
        </div>
    )
}
