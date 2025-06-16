'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div className="bg-blue-500 dark:bg-blue-600 text-white p-4 text-center">
        <a 
          href="https://maven.com/aman-khan/thriving-as-an-ai-pm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline inline-flex items-center justify-center gap-2 text-lg font-medium"
        >
          Check out my course &quot;Prototype to Production: The AI PM Playbook&quot;
          <span className="text-blue-100">→</span>
        </a>
      </div>
      
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-8">
        <main className="max-w-2xl mx-auto w-full">
          <h1 className="text-6xl font-bold mb-8">aman khan</h1>
          <nav>
            <ul className="space-y-2 text-xl">
              <li>
                <Link href="/products" className="hover:underline">Products I&apos;ve worked on</Link>
              </li>
              <li>
                <Link 
                  href="https://aiproductplaybook.com" 
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link 
                  href="https://knowing-headlight-107.notion.site/Vector-Ventures-Fund-I-13d3f06734608031bb26d3cceea37dee?pvs=4" 
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Companies I&apos;ve invested in
                </Link>
              </li>
            </ul>
          </nav>

          <section className="mt-12">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2 text-xl">
              <li>
                <a 
                  href="https://www.linkedin.com/in/amanberkeley" 
                  className="hover:underline inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/_amankhan" 
                  className="hover:underline inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-5 w-5" />
                  X
                </a>
              </li>
              <li>
                <a 
                  href="mailto:myfirstname@vectorventures.xyz" 
                  className="hover:underline"
                >
                  myfirstname@vectorventures.xyz
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-4xl font-bold mb-4">Speaking</h2>
            <ul className="space-y-4 text-xl">
              <li>
                <div className="space-y-1">
                  <p className="font-semibold">Lenny&apos;s Newsletter</p>
                  <a 
                    href="https://www.youtube.com/watch?v=E_rNotqs--I" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Interview
                  </a>
                  <a 
                    href="https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Beyond Vibe Checks: A PM&apos;s Complete Guide
                  </a>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <p className="font-semibold">Peter Yang</p>
                  <a 
                    href="https://www.youtube.com/watch?v=u8lEDw7pOkE&t=2379s" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Interview
                  </a>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <p className="font-semibold">Hamel - Evals Course</p>
                  <a 
                    href="https://www.youtube.com/watch?v=XueTa4qrMpg" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Interview
                  </a>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <p className="font-semibold">Deeplearning.ai</p>
                  <a 
                    href="https://www.deeplearning.ai/short-courses/evaluating-ai-agents/" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Evaluating AI Agents Course
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=GzxdGpFhn04" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Interview
                  </a>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <p className="font-semibold">Mind The Product</p>
                  <a 
                    href="https://www.mindtheproduct.com/how-to-thrive-as-an-ai-product-manager-aman-khan-director-of-product-arize-ai/" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How to Thrive as an AI Product Manager
                  </a>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <p className="font-semibold">Arize & GitHub - AI Product Manager</p>
                  <a 
                    href="https://www.youtube.com/watch?v=1raJngrn_Jk" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Navigating the Future of AI Product Management
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=Ms1n15uTL8o" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI PM Talk - Part 2
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=v0eTTn7ZPEc" 
                    className="hover:underline text-lg block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI PM Talk - Part 3
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </main>

        <footer className="fixed bottom-4 left-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark mode"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </footer>
      </div>
    </>
  )
}