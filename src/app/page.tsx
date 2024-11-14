import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TherapyHub() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TherapyHub</h1>
          <nav>
            <ul className="flex items-center space-x-6">
              <li><a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Book Now</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 text-center bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Combat Isolation, Embrace Community</h2>
            <p className="text-xl mb-8">TherapyHub: Where remote therapists find connection, support, and a perfect balance of privacy and community.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Join Our Community</Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-100">
                  <CardTitle className="text-blue-600">Private Calling Rooms</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  Soundproof rooms for your online sessions, ensuring client confidentiality while you work alongside peers.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-green-100">
                  <CardTitle className="text-green-600">Community Spaces</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  Break the isolation of remote work. Connect, share experiences, and build a supportive network with fellow therapists.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-yellow-100">
                  <CardTitle className="text-yellow-600">Complimentary Amenities</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  Enjoy free coffee, snacks, and essentials. Focus on your practice while we take care of the little things that make a big difference.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">You're Not Alone Anymore</h2>
            <p className="text-xl mb-8 text-gray-700">
              As a remote therapist, it's easy to feel isolated. At TherapyHub, you'll find a vibrant community of like-minded professionals.
              Collaborate, share insights, and grow together while maintaining the flexibility of remote work.
            </p>
            <Button variant="default" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Explore Membership Options</Button>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Flexible Pricing Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-600">Hourly</CardTitle>
                  <CardDescription>Perfect for occasional use</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-blue-600">$20<span className="text-xl font-normal">/hour</span></p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Book Now</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-600">Daily</CardTitle>
                  <CardDescription>Ideal for full day sessions</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-green-600">$50<span className="text-xl font-normal">/day</span></p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">Book Now</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="text-yellow-600">Monthly</CardTitle>
                  <CardDescription>Best value for regular use</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-yellow-600">$600<span className="text-xl font-normal">/month</span></p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">Subscribe</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 TherapyHub. All rights reserved.</p>
          <p className="mt-2">123 Therapy Street, Wellness City, WC 12345</p>
          <p className="mt-2">contact@therapyhub.com | (555) 123-4567</p>
        </div>
      </footer>
    </div>
  )
}