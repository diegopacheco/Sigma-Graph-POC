/**
 * This is a minimal example of sigma. You can use it as a base to write new
 * examples, or reproducible test cases for new issues, for instance.
 */

import Graph from "graphology";
import Sigma from "sigma";

const container = document.getElementById("sigma-container") as HTMLElement;

const graph = new Graph();
graph.addNode("TeamA", { x: 0, y: 10, size: 10, label: "Team A", color: "blue" });
graph.addNode("TeamB", { x: 5, y: 0, size: 10,  label: "Team B", color: "green" });
graph.addNode("TeamC", { x: 0,  y: 5, size: 10, label: "Team C", color: "red" });
graph.addNode("TeamD", { x: 0,  y: 5, size: 10, label: "Team D", color: "red" });
graph.addNode("TeamE", { x: 0,  y: 5, size: 10, label: "Team E", color: "green" });
graph.addNode("TeamF", { x: 0,  y: 5, size: 10, label: "Team F", color: "green" });
graph.addNode("TeamG", { x: 0,  y: 5, size: 10, label: "Team G", color: "green" });
graph.addNode("TeamX", { x: 0,  y: 5, size: 10, label: "Team X", color: "green" });

graph.addEdge("TeamA", "TeamB", { type: "arrow", label: "Depends On Epic#1", size: 8 });
graph.addEdge("TeamA", "TeamC", { type: "arrow", label: "Depends On Epic#2", size: 8 });
graph.addEdge("TeamE", "TeamC", { type: "arrow", label: "Depends On Epic#3", size: 8 });
graph.addEdge("TeamF", "TeamC", { type: "arrow", label: "Depends On Epic#4", size: 8 });
graph.addEdge("TeamG", "TeamC", { type: "arrow", label: "Depends On Epic#5", size: 8 });
graph.addEdge("TeamC", "TeamX", { type: "arrow", label: "Depends On Epic#6", size: 8 });

graph.nodes().forEach((node, i) => {
    const angle = (i * 2 * Math.PI) / graph.order;
    graph.setNodeAttribute(node, "x", 100 * Math.cos(angle));
    graph.setNodeAttribute(node, "y", 100 * Math.sin(angle));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderer = new Sigma(graph, container, {
    renderEdgeLabels: true,
});
  