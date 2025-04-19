import Theme from "./Theme";
import Test from "./Test";

export default function Layout({ children }) {
    return (
        <div className="container-width min-h-screen">
            <div className="flex justify-end p-4">
                <Theme />
            </div>
            {children}
        </div>
    );
}
