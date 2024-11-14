"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from 'next/image'

export default function TherapyHub() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<{
    message?: string;
    error?: string;
  }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleWaitlistSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true)
    setStatus({})

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setStatus({ message: 'Successfully joined waitlist!' });
      setEmail('');
    } catch (error) {
      setStatus({
        error: error instanceof Error ? error.message : 'Failed to join waitlist'
      });
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TherapyHub</h1>
          <nav>
            <ul className="flex items-center space-x-6">
              <li><a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" onClick={scrollToWaitlist}>Book Now</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 text-center bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/meeting-pod.webp"
              alt="TherapyHub Meeting Pod"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Combat Isolation, Embrace Community</h2>
            <p className="text-xl mb-8">TherapyHub: Where remote therapists find connection, support, and a perfect balance of privacy and community.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={scrollToWaitlist}>Join Our Community</Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Our Features</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/meeting-pod.webp"
                  alt="Modern meeting pod for private therapy sessions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-blue-100">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/window.svg"
                        alt="Private Rooms"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <CardTitle className="text-blue-600">Private Calling Rooms</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    Soundproof rooms for your online sessions, ensuring client confidentiality while you work alongside peers.
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-green-100">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/globe.svg"
                        alt="Community"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <CardTitle className="text-green-600">Community Spaces</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    Break the isolation of remote work. Connect, share experiences, and build a supportive network with fellow therapists.
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-yellow-100">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/file.svg"
                        alt="Amenities"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <CardTitle className="text-yellow-600">Complimentary Amenities</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    Enjoy free coffee, snacks, and essentials. Focus on your practice while we take care of the little things that make a big difference.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">{`You're Not Alone Anymore`}</h2>
              <p className="text-xl mb-8 text-gray-700">
                {`As a remote therapist, it's easy to feel isolated. At TherapyHub, you'll find a vibrant community of like-minded professionals.
                Collaborate, share insights, and grow together while maintaining the flexibility of remote work.`}
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={scrollToWaitlist}
              >
                Explore Membership Options
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/people-talking.jpg"
                alt="Therapists collaborating in a community space"
                fill
                className="object-cover"
              />
            </div>
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
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" onClick={scrollToWaitlist}>Book Now</Button>
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
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700" onClick={scrollToWaitlist}>Book Now</Button>
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
                  <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700" onClick={scrollToWaitlist}>Subscribe</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="waitlist" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 max-w-md">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center text-blue-600">Join Our Waitlist</CardTitle>
                <CardDescription className="text-center">
                  Be the first to know when we launch in your area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    disabled={isSubmitting}
                  />
                  {status.error && (
                    <p className="text-red-500 text-sm text-center">{status.error}</p>
                  )}
                  {status.message && (
                    <p className="text-green-500 text-sm text-center">{status.message}</p>
                  )}
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                    onClick={handleWaitlistSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 TherapyHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}