"use client";

export default function Loader() {
  return (
    <div className="loader-root">
      <div className="content">
        <h1 className="name">Devyani</h1>

        {/* Center-out underline */}
        {/* Center-out underline */}
<div className="line-wrapper">
  <div className="line" />
</div>


        <p className="tagline">
          CODE, CREATIVITY AND CONTINUOUS LEARNING
        </p>
      </div>

      {/* ✅ Plain style tag (App Router safe) */}
      <style>{`
        .loader-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;

          background: linear-gradient(
            120deg,
            #fff1f2,
            #ffffff,
            #fce7f3
          );
          background-size: 200% 200%;
          animation: bgMove 6s ease-in-out infinite;
        }

        .content {
          text-align: center;
        }
.line-wrapper {
  width: 160px;
  height: 4px;
  margin: 14px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  width: 100%;
  height: 100%;
  background: #ec4899;
  border-radius: 999px;

  transform: scaleX(0);
  transform-origin: center;
  animation: growLine 0.9s ease-out forwards;
  animation-delay: 0.5s;
}

@keyframes growLine {
  to {
    transform: scaleX(1);
  }
}

        .name {
          font-size: 3.5rem;
          font-weight: 600;
          color: #ec4899;
          opacity: 0;
          animation: fadeUp 1.2s ease forwards;
        }

        .center-line {
          stroke-dasharray: 160;
          stroke-dashoffset: 160;
          animation: expandLine 1.2s ease-out forwards;
          animation-delay: 0.5s;
        }

        .tagline {
          margin-top: 1.4rem;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          color: #374151;
          opacity: 0;
          animation: fadeIn 1s ease forwards;
          animation-delay: 1.2s;
        }

        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
