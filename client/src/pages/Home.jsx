import Button from '../components/common/Button'
import Card from '../components/common/Card'
import Input from '../components/common/Input'

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-xl space-y-8">

        <h1 className="text-4xl font-bold text-primary">
          EVORA COMPONENTS
        </h1>

        <Card hover className="space-y-6 p-8">
          <Input
            label="Email Address"
            id="test-email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            id="test-password"
            inputType="password"
            placeholder="Enter your password"
          />

          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>
          </div>
        </Card>

      </div>
    </div>
  )
}

export default Home