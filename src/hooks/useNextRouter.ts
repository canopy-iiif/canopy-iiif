// @ts-nocheck

// Custom hook to safely abstract useRouter functionality
const useNextRouter = () => {
  const useRouterAvailable =
    typeof window !== "undefined" && !!window.__NEXT_ROUTER;

  const useRouter = useRouterAvailable
    ? async () => {
        const router = await import("next/router");
        return router.useRouter();
      }
    : () => ({ push: (href: string) => (window.location.href = href) });

  return useRouter();
};

export default useNextRouter;
