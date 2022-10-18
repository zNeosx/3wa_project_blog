

export default function Dashboard() {
    const logout = () => { 
        localStorage.removeItem("token");
        localStorage.removeItem("avatar");
        window.location.href = "/";
    }

    return (
        <section className="page-container">
            <h1>Dashboard</h1>
            <button className="btn" onClick={() => logout()}>Logout</button>
        </section>
    )
}