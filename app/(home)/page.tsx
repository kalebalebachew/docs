import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, RefreshCcw, Settings } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-12 lg:py-12 xl:py-24">
          <div className="container px-4 md:px-2">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Never Lose an API Request Again
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Replay API captures failed requests and retries them automatically, ensuring your data always gets through.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">
                  Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-12 lg:py-24 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <RefreshCcw className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Automatic Retries</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Configurable retry logic ensures your requests get through, even in unreliable network conditions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Settings className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Custom Retry Limits</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Set your own retry limits and intervals to match your application's needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Request Persistence</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Failed requests are stored securely and retried even after system restarts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">How It Works</h2>
            <ol className="grid gap-6 md:grid-cols-3">
              <li className="flex flex-col items-center space-y-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">1</span>
                <h3 className="text-xl font-bold">Capture</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Replay API intercepts failed API requests in your application.
                </p>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">2</span>
                <h3 className="text-xl font-bold">Store</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Failed requests are securely stored for later retry attempts.
                </p>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">3</span>
                <h3 className="text-xl font-bold">Retry</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Requests are automatically retried based on your configured settings.
                </p>
              </li>
            </ol>
          </div>
        </section>
      
      </main>
    </div>
  )
}
