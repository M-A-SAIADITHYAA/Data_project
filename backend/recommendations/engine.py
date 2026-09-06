"""
Operational Decision-Support & Recommendation Engine
Rules + ML model driven system that translates predictive risk into concrete operational interventions.
"""

from typing import Dict, Any, List

class RecommendationEngine:
    @staticmethod
    def evaluate_order(
        delay_probability: float,
        prep_time: float,
        base_prep_time: float,
        available_partners: int,
        traffic_multiplier: float,
        distance_km: float
    ) -> List[Dict[str, Any]]:
        """Evaluate operational triggers and return prioritized operational playbooks."""
        recommendations = []
        
        # Rule 1: Kitchen Bottleneck
        prep_excess = prep_time - base_prep_time
        if delay_probability >= 0.70 and prep_excess >= 8.0:
            recommendations.append({
                "category": "Kitchen Operations",
                "urgency": "High",
                "action": "Flag restaurant preparation bottleneck",
                "details": f"Kitchen is running {prep_excess:.1f} mins over baseline. Throttle order batching rate or increase prep buffer SLA by +{int(prep_excess)} min."
            })
        elif delay_probability >= 0.50 and prep_excess >= 5.0:
            recommendations.append({
                "category": "Kitchen Operations",
                "urgency": "Medium",
                "action": "Alert restaurant kitchen manager",
                "details": f"Prep time creeping above baseline by {prep_excess:.1f} min. Request expedited order preparation."
            })

        # Rule 2: Delivery Partner Supply Deficit
        if delay_probability >= 0.70 and available_partners <= 2:
            recommendations.append({
                "category": "Fleet Dispatch",
                "urgency": "High",
                "action": "Increase delivery-partner availability in cluster",
                "details": f"Only {available_partners} available partner(s) within 3km. Trigger zone surge incentive (₹25/order) and expand dispatch radius."
            })
        elif delay_probability >= 0.50 and available_partners <= 4:
            recommendations.append({
                "category": "Fleet Dispatch",
                "urgency": "Medium",
                "action": "Pre-assign nearest active rider on dropoff leg",
                "details": "Dispatch next completing delivery partner to reduce pickup queue time."
            })

        # Rule 3: Road Traffic Congestion & Environmental Shock
        if delay_probability >= 0.70 and traffic_multiplier >= 1.4:
            recommendations.append({
                "category": "Customer Communication",
                "urgency": "High",
                "action": "Adjust customer ETA for heavy traffic conditions",
                "details": f"Route corridor traffic index is {traffic_multiplier:.2f}x above baseline. Dynamically adjust live customer ETA by +10–12 min to maintain trust."
            })
            
        # Rule 4: Long Distance Transit
        if distance_km >= 8.0:
            recommendations.append({
                "category": "Transit Route",
                "urgency": "Low",
                "action": "Prioritize motorized two-wheeler partner",
                "details": f"Trip distance ({distance_km:.1f} km) requires high-speed motorcycle allocation; exclude bicycle fleet."
            })

        if not recommendations:
            recommendations.append({
                "category": "Standard",
                "urgency": "Normal",
                "action": "Normal operational dispatch",
                "details": "Order metrics are within standard operational tolerances. No active intervention needed."
            })

        return recommendations
