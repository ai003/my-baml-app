import { withBaml } from '@boundaryml/baml-nextjs-plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ... existing config
};

export default withBaml()(nextConfig);
