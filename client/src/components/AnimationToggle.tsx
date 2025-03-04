import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useAnimationStore } from "@/lib/stores/animation";

export default function AnimationToggle() {
  const { enabled, toggle } = useAnimationStore();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 bg-background/80 backdrop-blur-sm p-2 rounded-lg border">
      <Switch
        id="animations"
        checked={enabled}
        onCheckedChange={toggle}
      />
      <Label htmlFor="animations">Animations</Label>
    </div>
  );
}