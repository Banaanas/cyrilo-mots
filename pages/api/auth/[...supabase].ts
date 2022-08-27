import { handleAuth } from "@supabase/auth-helpers-nextjs";

import { navLinks } from "../../../data/navlinks";

export default handleAuth({ logout: { returnTo: navLinks.login.href } });
