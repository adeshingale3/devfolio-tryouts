import { useEffect, useState, useMemo } from 'react'
import { FolderGit2, Book, Github } from 'lucide-react'
import ProjectCard from './ProjectCard'

interface GitHubContributionProps {
  username?: string
}

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  public_gists: number
}

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface PinnedRepo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  updated_at: string
}

const GihubContribution = ({ username = 'adeshingale3' }: GitHubContributionProps) => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'github' | 'projects' | 'readme'>('github')

  // Fetch GitHub stats
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        setStats({
          public_repos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0,
          public_gists: data.public_gists || 0,
        })
      } catch (err) {
        setError('Failed to fetch GitHub stats')
      } finally {
        setLoading(false)
      }
    }
    fetchGitHubStats()
  }, [username])

  // Fetch repos
  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        const repos = await response.json()
        const sorted = repos
          .sort((a: PinnedRepo, b: PinnedRepo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)
        setPinnedRepos(sorted)
      } catch (err) {
        setPinnedRepos([])
      }
    }
    fetchPinnedRepos()
  }, [username])

  // Generate random contributions (simulated for demo)
  useEffect(() => {
    const contributionData: ContributionDay[] = []
    const today = new Date()
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      const count = Math.floor(Math.random() * 6)
      contributionData.push({ date: date.toISOString().split('T')[0], count, level: Math.min(4, Math.floor(count / 2)) })
    }
    setContributions(contributionData.reverse())
  }, [])

  const lastMonthContributions = contributions.slice(-30)
  const monthName = new Date().toLocaleDateString('en-US', { month: 'short' }).toUpperCase()

  const getSkyBlueColorClass = (level: number) => {
    switch (level) {
      case 1: return 'bg-sky-200'
      case 2: return 'bg-sky-400'
      case 3: return 'bg-sky-500'
      case 4: return 'bg-sky-600'
      default: return 'bg-gray-100'
    }
  }

  const totalContributions = useMemo(() => {
    return contributions.reduce((sum, d) => sum + d.count, 0)
  }, [contributions])

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-blue-400',
      HTML: 'bg-orange-400',
      CSS: 'bg-blue-400',
      React: 'bg-cyan-400',
      Vue: 'bg-green-500',
    }
    return colors[language] || 'bg-sky-400'
  }

  if (loading) return <div className="text-center py-10">Loading...</div>

  return (
    <div className="px-8 md:px-20 lg:px-40 py-8">
      <div className="flex flex-col gap-6 bg-white rounded-xl shadow-md p-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-400 montserrat">GITHUB</h1>

          {/* Tabs */}
          <div
  className="
    w-full 
    flex 
    flex-col-reverse sm:flex-row 
    items-center sm:justify-center 
    gap-2 sm:gap-4 
    text-sm font-medium 
    mb-4 sm:mb-0
  "
>
  {/* Tabs - Top horizontal bar on mobile */}
  <div className="
    flex 
    w-full 
    justify-center sm:justify-center
    items-center sm:items-center 
    gap-2 sm:gap-4 
    
    border-b sm:border-0 
    pb-2 sm:pb-0
    mb-20
  ">
    <button
      onClick={() => setActiveTab('github')}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all duration-300 whitespace-nowrap ${
        activeTab === 'github'
          ? 'bg-sky-100 text-sky-600 font-semibold'
          : 'text-gray-500 hover:text-sky-500'
      }`}
    >
      <Github size={16} /> GitHub
    </button>

    <button
      onClick={() => setActiveTab('projects')}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all duration-300 whitespace-nowrap ${
        activeTab === 'projects'
          ? 'bg-sky-100 text-sky-600 font-semibold'
          : 'text-gray-500 hover:text-sky-500'
      }`}
    >
      <FolderGit2 size={16} /> Projects
    </button>

    <button
      onClick={() => setActiveTab('readme')}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all duration-300 whitespace-nowrap ${
        activeTab === 'readme'
          ? 'bg-sky-100 text-sky-600 font-semibold'
          : 'text-gray-500 hover:text-sky-500'
      }`}
    >
      <Book size={16} /> README
    </button>
  </div>
</div>


        </div>

        {/* Conditional Tabs Content */}
        {activeTab === 'github' && (
          <div>
            <div className="flex gap-10 flex-wrap mt-2">
              {stats && (
                <>
                  <div>
                    <span className="text-5xl font-bold text-gray-800">{totalContributions}</span>
                    <div className="text-md text-gray-500">Contributions (30 days)</div>
                  </div>
                  <div>
                    <span className="text-5xl font-bold text-gray-800">{stats.public_repos}</span>
                    <div className="text-md text-gray-500">Repositories</div>
                  </div>
                  <div>
                    <span className="text-5xl font-bold text-gray-800">{stats.followers}</span>
                    <div className="text-md text-gray-500">Followers</div>
                  </div>
                </>
              )}
            </div>

            {/* Contribution Graph */}
            <div className="mt-8 ">
              <div className="text-sm text-gray-600 font-medium mb-4">
                Contributions in {monthName}
              </div>
              <div className='flex flex-row gap-4'>
                <div className="flex gap-[10px]">
                  {Array.from({ length: Math.ceil(lastMonthContributions.length / 7) }).map((_, weekIndex) => {
                    const week = lastMonthContributions.slice(weekIndex * 7, weekIndex * 7 + 7);
                    return (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.map((d, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-sm ${getSkyBlueColorClass(d.level)} hover:scale-125 transition-all duration-200 cursor-pointer`}
                            title={`${d.count} contributions on ${d.date}`}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-[10px]">
                  {Array.from({ length: Math.ceil(lastMonthContributions.length / 7) }).map((_, weekIndex) => {
                    const week = lastMonthContributions.slice(weekIndex * 7, weekIndex * 7 + 7);
                    return (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.map((d, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-sm ${getSkyBlueColorClass(d.level)} hover:scale-125 transition-all duration-200 cursor-pointer`}
                            title={`${d.count} contributions on ${d.date}`}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Pinned Repos */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Pinned Repositories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pinnedRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-gray-200 rounded-lg hover:border-sky-400 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-sky-600 font-semibold">{repo.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{repo.description}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></span>
                          {repo.language}
                        </span>
                      )}
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🍴 {repo.forks_count}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="flex flex-row flex-wrap px-4 gap-6 mt-4 items-center justify-center">
            <ProjectCard
              logo="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              name="VotingChain"
              description="A secure blockchain-based voting system with biometric authentication."
              hackathon="Smart India Hackathon"
            />
            <ProjectCard
              logo="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              name="EyeSense"
              description="AI-powered platform for predicting eye diseases using ML models."
              hackathon="Google DevFest"
            />

            <ProjectCard
              logo="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
              name="MotivAI Chat"
              description="A motivational chatbot that uses NLP to provide emotional support."
              hackathon="AIthon 2025"
            />

            <div>

            </div>
          </div>
        )}

        {/* README Tab */}
        {activeTab === 'readme' && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">About Me 👋</h2>
            <p className="text-gray-600 leading-relaxed">
              Hey there! I'm <strong>Adesh</strong>, a frontend engineer passionate about
              building clean, scalable, and delightful user interfaces.
              <br />
              I love working with <strong>React</strong>, <strong>Next.js</strong>, and
              <strong> Tailwind CSS</strong>, and I’m always exploring how AI can make
              development more intuitive.
            </p>
            <p className="italic text-gray-500 mt-3">
              "Code is art when written with empathy." 🎨
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GihubContribution
