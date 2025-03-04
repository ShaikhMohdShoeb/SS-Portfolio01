import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { Cloud, Code, Terminal, Settings, CheckCircle2 } from "lucide-react";

export default function About() {
  const bgPattern = {
    backgroundImage: `radial-gradient(rgba(var(--primary-rgb), 0.05) 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
  };

  return (
    <div className="space-y-12 py-8 px-4 rounded-lg" style={bgPattern}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I administrate/manage and automate Azure environments (IaaS, PaaS) while streamlining DevOps workflows. Proficient in Azure infra, and tools like Ansible for configuration management, GitHub Actions, Azure DevOps for CI/CD, and Terraform for IaC.
          </p>
        </div>
      </motion.div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Key Expertise</h2>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Azure Infrastructure</h3>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground">
                    <li>Designed VNets (peering, NSGs), optimized VMs, and enforced compliance via Azure Policy/RBAC.</li>
                    <li>Cut cloud costs by <span className="font-semibold">30%+</span> via subscription governance, reserved instances, and Azure Hybrid Benefit.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Security & Identity</h3>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground">
                    <li>Deployed Azure AD solutions (conditional access, MFA) and secured networks with Firewall/VPN.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">DevOps Automation</h3>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground">
                    <li>Built CI/CD pipelines (<span className="font-semibold">GitHub Actions, Azure DevOps</span>) for IaC and app deployments.</li>
                    <li>Automated <span className="font-semibold">40%</span> of manual tasks via <span className="font-semibold">Ansible</span>; leveraged <span className="font-semibold">Azure Monitor</span> for proactive ops.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
