export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-600 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-3">
                    <span
                        className="h-3 w-3 rounded-full bg-primary animate-bounce"
                        aria-hidden="true"
                    />
                    <span
                        className="h-3 w-3 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                        aria-hidden="true"
                    />
                    <span
                        className="h-3 w-3 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                        aria-hidden="true"
                    />
                </div>
            </div>
        </div>
    );
}