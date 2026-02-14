import { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock, ArrowLeft } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      navigate('/studio');
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: '#A78BFA', top: '10%', left: '10%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: '#2D5BFF', bottom: '10%', right: '10%' }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Back button */}
      <Link to="/" className="absolute top-8 left-8 z-10">
        <motion.div
          className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
          style={{ color: '#F2F2F2' }}
          whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.1)' }}
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </motion.div>
      </Link>

      <GlassCard className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 
            className="text-4xl mb-3"
            style={{ color: '#F2F2F2' }}
          >
            Welcome Back
          </h1>
          <p style={{ color: '#A47864' }}>
            Sign in to continue creating
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label 
              className="block mb-2 text-sm"
              style={{ color: '#F2F2F2' }}
            >
              Email
            </label>
            <div className="relative">
              <Mail 
                className="absolute left-4 top-1/2 -translate-y-1/2" 
                size={20} 
                style={{ color: '#A47864' }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl backdrop-blur-sm border border-white/20 outline-none transition-all"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#F2F2F2',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(167, 139, 250, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label 
              className="block mb-2 text-sm"
              style={{ color: '#F2F2F2' }}
            >
              Password
            </label>
            <div className="relative">
              <Lock 
                className="absolute left-4 top-1/2 -translate-y-1/2" 
                size={20} 
                style={{ color: '#A47864' }}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 rounded-xl backdrop-blur-sm border border-white/20 outline-none transition-all"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#F2F2F2',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(167, 139, 250, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a 
              href="#"
              className="text-sm hover:underline"
              style={{ color: '#A78BFA' }}
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button with Liquid Fill Animation */}
          <motion.button
            type="submit"
            className="w-full py-4 rounded-xl relative overflow-hidden"
            style={{ 
              border: '1px solid rgba(167, 139, 250, 0.3)',
              color: '#F2F2F2',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
          >
            <motion.div
              className="absolute inset-0"
              style={{ 
                background: 'linear-gradient(135deg, #2D5BFF 0%, #A78BFA 100%)',
              }}
              initial={{ y: '100%' }}
              animate={{ y: isLoading ? 0 : '100%' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <span className="relative z-10">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </span>
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px" style={{ background: 'rgba(255, 255, 255, 0.2)' }} />
            <span className="text-sm" style={{ color: '#A47864' }}>or continue with</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255, 255, 255, 0.2)' }} />
          </div>

          {/* SSO Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              type="button"
              className="py-3 px-4 rounded-xl border border-white/20 flex items-center justify-center gap-2"
              style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#F2F2F2',
              }}
              whileHover={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 20px rgba(66, 133, 244, 0.3)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </motion.button>

            <motion.button
              type="button"
              className="py-3 px-4 rounded-xl border border-white/20 flex items-center justify-center gap-2"
              style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#F2F2F2',
              }}
              whileHover={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 20px rgba(0, 120, 212, 0.3)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 24H0V8h11.4v16zm12.6 0h-11.4V8H24v16zm0-18H0V0h24v6z" fill="#F25022"/>
                <path d="M11.4 6H0V0h11.4v6z" fill="#7FBA00"/>
                <path d="M24 6h-11.4V0H24v6z" fill="#00A4EF"/>
                <path d="M11.4 24H0V8h11.4v16z" fill="#FFB900"/>
              </svg>
              Microsoft
            </motion.button>
          </div>
        </form>

        {/* Sign up link */}
        <p className="text-center mt-8" style={{ color: '#A47864' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#A78BFA' }} className="hover:underline">
            Sign up
          </Link>
        </p>
      </GlassCard>
    </div>
  );
}
